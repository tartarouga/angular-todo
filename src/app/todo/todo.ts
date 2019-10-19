export class Todo {
    titre: string;
    description: string;
    etat: string;
    user: string;

    constructor(titre: string, description: string, etat: string, user: string) {
        this.titre = titre;
        this.description = description;
        this.etat = etat;
        this.user = user;


    }
}