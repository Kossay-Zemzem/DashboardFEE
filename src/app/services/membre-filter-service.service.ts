import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembreFilterServiceService {

  constructor() { }

  private comiteSelectedSubject: BehaviorSubject<string> = new BehaviorSubject<string>('MEDIA'); // Default value is 'MEDIA'
  private nbMembreParComiteSubject: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([0,0,0]); // 0 MEDIA , 0 SPONSORING , 0 LOGISTIQUE
  // Update the selected comite
  updateComiteSelected(comite: string): void {
    this.comiteSelectedSubject.next(comite); // Notify all subscribers of the new value (subscriber=component that uses the service to fetch data)
  }

  // Get the current selected comite as an Observable (used by suvbscribers)
  getComiteSelected(): Observable<string> {
    return this.comiteSelectedSubject.asObservable();
  }

  // Update the number of members per comite
  updateNbMembreParComite(nbMembreParComite: number[]): void {
    this.nbMembreParComiteSubject.next(nbMembreParComite); // Notify all subscribers of the new value (subscriber=component that uses the service to fetch data)
  }

  // Get the current number of members per comite as an Observable (used by suvbscribers)
  getNbMembreParComite(): Observable<number[]> {
    return this.nbMembreParComiteSubject.asObservable();
  }
}
