import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfilCollab } from '../models/profil-collab.model';

@Injectable({
  providedIn: 'root'
})
export class ProfilCollabService {
  private apiUrl = 'http://localhost:8082/api/profilCollabs'; // Remplacez par votre URL de l'API

  constructor(private http: HttpClient) {}

  getProfilsCollab(): Observable<ProfilCollab[]> {
    return this.http.get<ProfilCollab[]>(this.apiUrl);
  }
}
