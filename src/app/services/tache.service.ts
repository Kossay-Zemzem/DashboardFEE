import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tache } from '../models/Tache'; // Import the Tache interface (modele)
import { EtatTache } from '../models/EtatTache';
@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http: HttpClient) { }
  //private url:string = 'http://localhost:8080/membre'; // URL to spring boot backend
  //private url:string = 'assets/data/membres.json';  // URL to local JSON file for testing purposes. (only GET works)
  private url: string = 'http://localhost:3000/tache'; // URL to JSON server for testing purposes. (all CRUD operations work)
  //run server with command in terminal:  npx json-server .\src\assets\data\mock\db.json --port 3000

  //getTache (Membre IDs are converted to string names in the backend before sending the response) !!
  getAllTaches(): Observable<Tache[]> {
    return this.http.get<Tache[]>(this.url);
  }
  getTacheComite(comite: string): Observable<Tache[]> {
    return this.http.get<Tache[]>(`${this.url}?comite=${comite.toUpperCase()}`);
  }
  //updateTacheState
  updateTacheState(id: number, newState: EtatTache): Observable<Tache> {
    return this.http.patch<Tache>(`${this.url}/${id}`, { etat: newState });
  }
}
