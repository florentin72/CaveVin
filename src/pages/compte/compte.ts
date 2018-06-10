import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { Vin } from '../../model/vin';

/**
 * Generated class for the ComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compte',
  templateUrl: 'compte.html',
})
export class ComptePage {
  listVin : Vin [] = [];
  prix : number;
  nbRose : number;
  nbRouge : number;
  nbBlanc : number;
  readonly TAG  : string = "PageCompte";
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.listVin = this.navParams.get("theList");
    console.log(this.TAG + this.listVin.length);

    this.prix = this.calculPrixTot();
    console.log("Valeur total de la cave  " + this.prix);
    
    this.nbBlanc = this.calculParType("blanc");
    console.log("nombre de bouteille de blanc : " + this.nbBlanc);
    
    this.nbRouge = this.calculParType("rouge");
    console.log("nombre de bouteille de rouge : " + this.nbRouge);

    this.nbRose = this.calculParType("rose");
    console.log("nombre de bouteille de rose : " + this.nbRose);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComptePage');
  }




  calculPrixTot(): number{
    let p : number = 0;
    this.listVin.forEach(element => {
      p += element.prix*element.quantite;

      console.log("p = " + p);
      console.log(element.type);
      
      

    });
    return p ;
  }

  calculParType(type : string) : number {
    let nb : number = 0 ; 
    this.listVin.forEach(element => {
        if (element.type == type){
          console.log("Test résussi");
          
          nb += element.quantite*1;

        }


    });



console.log("nb = "  + nb);

    return nb;
  }

}
