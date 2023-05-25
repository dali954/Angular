import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collaborateur } from '../models/collaborateur.model';


const baseUrl = 'http://localhost:8082/api/collaborateurs';


@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Collaborateur[]> {
    return this.http.get<Collaborateur[]>(baseUrl);
  }

  get(id: string): Observable<Collaborateur> {
    
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Collaborateur[]> {
    return this.http.get<Collaborateur[]>(`${baseUrl}?title=${title}`);
  }

  // getProfilsCollab(): Observable<ProfilCollab[]> {
  //   const url = `${baseUrl}`; 
  //   return this.http.get<ProfilCollab[]>(url);
  // }

  // getEquipes(): Observable<Equipe[]> {
  //   const url = `${baseUrl}/equipes`;
  //   return this.http.get<Equipe[]>(url);
  // }
}
