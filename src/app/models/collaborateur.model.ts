import { Equipe } from "./equipe.model";
import { ProfilCollab } from "./profil-collab.model";

export class Collaborateur {
    id_collab? : any;
    profilCollab? : ProfilCollab;
    equipe? : Equipe;
    // profilCollab? : String;
    // equipe? : String;
    email? : String;
    username? : String;
    password? : String;
}
