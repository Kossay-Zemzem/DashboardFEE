import { EtatTache } from "./EtatTache";

export interface Tache {
    id: number;
    titre: string;
    description: string;
    deadline: Date;
    etat: EtatTache;
    comite: string; // MEDIA , SPONSORING , LOGISTIQUE
    MembresConcerne: string[]; //IDs of membres in the backend , they get converted to names BEFORE the http response is recieved
}