import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Collaborateur } from 'src/app/models/collaborateur.model';
import { Equipe } from 'src/app/models/equipe.model';
import { ProfilCollab } from 'src/app/models/profil-collab.model';
import { CollaborateurService } from 'src/app/services/collaborateur.service';
import { EquipeService } from 'src/app/services/equipe.service';
import { ProfilCollabService } from 'src/app/services/profil-collab.service';

@Component({
  selector: 'app-add-collaborateur',
  templateUrl: './add-collaborateur.component.html',
  styleUrls: ['./add-collaborateur.component.css']
})
export class AddCollaborateurComponent implements OnInit {
  collaborateurForm: FormGroup ;
  submitted = false;
  profilsCollab: ProfilCollab[] = [];
  equipes: Equipe[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private collaborateurService: CollaborateurService,
    private profilCollabService: ProfilCollabService,
    private equipeService: EquipeService
  ) { }

  ngOnInit(): void {
    this.collaborateurForm = this.formBuilder.group({
      profilCollab: ['', Validators.required],
      equipe: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loadProfilsCollab();
    this.loadEquipes();
  }

  loadProfilsCollab(): void {
    this.profilCollabService.getProfilsCollab().subscribe((data) => {
      this.profilsCollab = data;
    });
  }

  loadEquipes(): void {
    this.equipeService.getEquipes().subscribe((data) => {
      this.equipes = data;
    });
  }

  saveCollaborateur(): void {
    this.submitted = true;

    if (this.collaborateurForm.invalid) {
      return;
    }

    const formData = this.collaborateurForm.value;

    const collaborateur: Collaborateur = {
      profilCollab: this.profilsCollab.find(profile=>profile.id_profil_collab == formData.profilCollab),
      equipe: this.equipes.find(eq=>eq.id_equipe == formData.equipe),
      email: formData.email,
      username: formData.username,
      password: formData.password
    };
    console.log(this.collaborateurForm.value);
    
    this.collaborateurService.create(collaborateur).subscribe(
      (res) => {
        console.log(res);
        this.submitted = true;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  newCollaborateur(): void {
    this.submitted = false;
    this.collaborateurForm.reset();
  }
}
