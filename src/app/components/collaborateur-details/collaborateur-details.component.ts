import { Component, Input, OnInit } from '@angular/core';
import { CollaborateurService } from 'src/app/services/collaborateur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Collaborateur } from 'src/app/models/collaborateur.model';
import { ProfilCollab } from 'src/app/models/profil-collab.model';
import { Equipe } from 'src/app/models/equipe.model';
import { ProfilCollabService } from 'src/app/services/profil-collab.service';
import { EquipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-collaborateur-details',
  templateUrl: './collaborateur-details.component.html',
  styleUrls: ['./collaborateur-details.component.css']
})
export class CollaborateurDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentCollaborateur: Collaborateur = {
    profilCollab: new ProfilCollab(),
    equipe: new Equipe(),
    email: '',
    username: '',
    password: ''
  };

  profilCollabs: ProfilCollab[] = [];
  equipes: Equipe[] = [];
  message = '';

  constructor(
    private collaborateurService: CollaborateurService,
    private profilCollabService: ProfilCollabService,
    private equipeService: EquipeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCollaborateur(this.route.snapshot.params["id"]);
      this.getProfilCollabs();
      this.getEquipes();
    }
  }

  getCollaborateur(id_collab: string): void {
    this.collaborateurService.get(id_collab)
      .subscribe({
        next: (data) => {
          this.currentCollaborateur = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  getProfilCollabs(): void {
    this.profilCollabService.getProfilsCollab()
      .subscribe({
        next: (data) => {
          this.profilCollabs = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  getEquipes(): void {
    this.equipeService.getEquipes()
      .subscribe({
        next: (data) => {
          this.equipes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateCollaborateur(): void {
    this.message = '';

    this.collaborateurService.update(this.currentCollaborateur.id_collab, this.currentCollaborateur)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This collaborateur was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteCollaborateur(): void {
    this.collaborateurService.delete(this.currentCollaborateur.id_collab)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/collaborateurs']);
        },
        error: (e) => console.error(e)
      });
  }

}
