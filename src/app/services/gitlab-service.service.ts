import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GitLabProjectReq } from '../models/git-lab-project-req.model';

@Injectable({
  providedIn: 'root'
})
export class GitlabService {
  private baseUrl = 'http://localhost:8082'; // Remplacez cette URL par l'URL de votre API GitLab

  constructor(private http: HttpClient) {}

  createProject(projectReq: GitLabProjectReq): Observable<any> {
    const url = `${this.baseUrl}/projects`;
    return this.http.post(url, projectReq);
  }

  // Ajoutez d'autres méthodes pour les autres fonctionnalités de l'API GitLab si nécessaire
}
