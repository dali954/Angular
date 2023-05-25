import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaborateursListComponent } from './components/collaborateurs-list/collaborateurs-list.component';
import { CollaborateurDetailsComponent } from './components/collaborateur-details/collaborateur-details.component';
import { AddCollaborateurComponent } from './components/add-collaborateur/add-collaborateur.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { AddProjectComponent } from './components/add-project/add-project.component';



const routes: Routes = [
  { path: 'collaborateurs', component: CollaborateursListComponent },
  { path: 'collaborateurs/:id', component: CollaborateurDetailsComponent },
  { path: 'add', component: AddCollaborateurComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent },
  { path: 'add_Project', component: AddProjectComponent },
  { path: '', redirectTo: 'collaborateurs', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
