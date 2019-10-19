export class User {
    user: string;
    password: string;
    etat: boolean;

    constructor(titre: string, description: string) {
        this.user = titre;
        this.password = description;
        this.etat = false;
    }
}