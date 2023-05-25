import { Component, OnInit } from '@angular/core';
import { Collaborateur } from 'src/app/models/collaborateur.model';
import { CollaborateurService } from 'src/app/services/collaborateur.service';

@Component({
  selector: 'app-collaborateurs-list',
  templateUrl: './collaborateurs-list.component.html',
  styleUrls: ['./collaborateurs-list.component.css']
})
export class CollaborateursListComponent implements OnInit{

  collaborateurs?: Collaborateur[];
  currentCollaborateur: Collaborateur = {};
  currentIndex = -1;
  username = '';

  constructor(private collaborateurService: CollaborateurService) { }
  ngOnInit(): void {
    this.retrieveCollaborateurs();
    
  }

  retrieveCollaborateurs(): void {
    this.collaborateurService.getAll()
      .subscribe({
        next: (data) => {
          this.collaborateurs = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveCollaborateurs();
    this.currentCollaborateur = {};
    this.currentIndex = -1;
  }

  setActiveCollaborateur(collaborateur: Collaborateur, index: number): void {
    this.currentCollaborateur = collaborateur;
    this.currentIndex = index;
    console.log(collaborateur.id_collab);
    
    
  }

  removeAllCollaborateurs(): void {
    this.collaborateurService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchUsername(): void {
    this.currentCollaborateur = {};
    this.currentIndex = -1;

    this.collaborateurService.findByTitle(this.username)
      .subscribe({
        next: (data) => {
          this.collaborateurs = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


}
