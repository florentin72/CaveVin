export class Vin {

    //localisation : number;
    nom : string;
    domaine : string;
    quantite : number; 
    type : string;
    prix : number;
    commentaire : string;
    millesime : number;
    constructor(  n : string , d : string , t : string, p : number, q : number, com : string , m : number){
      
        this.domaine = d;
        this.nom = n;
        this.type = t;
        this.prix = p;
        this.quantite = q ;
        this.commentaire = com;
        this.millesime = m ;
    }



    toString() : string {

        return "Le vin " + this.nom + " domaine " + this.domaine + " prix :  " + this.prix;
    }
}