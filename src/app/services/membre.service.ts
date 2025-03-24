import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Membre} from '../models/Membre'; // Import the Membre interface (modele)
@Injectable({
  providedIn: 'root'
})
export class MembreService {

  constructor(private http:HttpClient) { }
  private url:string = 'assets/data/membres.json';
  // Get all membres
  getMembres():Observable<Membre[]>{ ////methode a utiliser dans la class du composante qui necessite membre
    return this.http.get<Membre[]>(this.url); //requette GET du serveur pour fetcher les membres 
    // ; pour le moment GET du fichier local JSON prochainement je suppose un JSON du backend Srping
  }
}
