export interface Membre {
    id: number;
    nom: string;
    prenom: string;
    numero: string;
    email: string;
    isLibre: boolean;
    imgSrc: string;
    comite: string; // MEDIA , SPONSORING , LOGISTIQUE
}