import { Equipe } from "./equipe.model";

export class Project {
    id_project? : any;
    equipe? : Equipe;
    name? : String;
    description? : String;
    date_debut_project? : Date;
    date_fin_project? : Date;
}
