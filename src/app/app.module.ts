import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCollaborateurComponent } from './components/add-collaborateur/add-collaborateur.component';
import { CollaborateurDetailsComponent } from './components/collaborateur-details/collaborateur-details.component';
import { CollaborateursListComponent } from './components/collaborateurs-list/collaborateurs-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCollaborateurComponent,
    CollaborateurDetailsComponent,
    CollaborateursListComponent,
    AddProjectComponent,
    ProjectDetailsComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
