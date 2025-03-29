import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Membre} from '../models/Membre'; // Import the Membre interface (modele)
@Injectable({
  providedIn: 'root'
})
export class MembreService {
  
  constructor(private http:HttpClient) { }
  //private url:string = 'http://localhost:8080/membre'; // URL to spring boot backend
  //private url:string = 'assets/data/membres.json';  // URL to local JSON file for testing purposes. (only GET works)
  private url:string = 'http://localhost:3000/membre'; // URL to JSON server for testing purposes. (all CRUD operations work)
  //run server with command in terminal:  npx json-server .\src\assets\data\mock\db.json --port 3000


  // Get all membres
  getMembres():Observable<Membre[]>{ ////methode a utiliser dans la class du composante qui necessite membre
    return this.http.get<Membre[]>(this.url); //requette GET du serveur pour fetcher les membres 
    // ; pour le moment GET du fichier local JSON prochainement je suppose un JSON du backend Srping
  }
  deleteMembre(id:number):Observable<Membre[]>{
    return this.http.delete<Membre[]>(`${this.url}/${id}`); //requette DELETE du serveur pour supprimer un membre (ne marche pas car on a pas du backend encore)

       //Simulate a DELETE request (you can replace this with actual backend logic later)
/*   return new Observable<void>((observer) => {
    setTimeout(() => {
      observer.next();
      observer.complete();
    }, 500); // Simulate network delay
  }); */
  }
  updateMembre(id:number,newNumero:string):Observable<Membre[]>{
    //requette PATCH du serveur pour modifier numero d'un membre d'ID id
    return this.http.patch<Membre[]>(`${this.url}/${id}`,{numero:newNumero}); //{cle:nouvelle_valeur} format
  }
}
