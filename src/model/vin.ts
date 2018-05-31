export class Vin {

    //localisation : number;
    nom : string;
    domaine : string;
    quantite : number; 
    type : string;
    prix : number;
    commentaire : string;
    constructor(  n : string , d : string , t : string, p : number, q : number, com : string){
      
        this.domaine = d;
        this.nom = n;
        this.type = t;
        this.prix = p;
        this.quantite = q ;
        this.commentaire = com;
    }

}