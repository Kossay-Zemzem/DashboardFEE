import { EtatTache } from "./EtatTache";

export interface Tache {
    id: number;
    titre: string;
    description: string;
    deadline: Date;
    etat: EtatTache;
    comite: string; // MEDIA , SPONSORING , LOGISTIQUE
    idMembresConcerne: number[];
}