import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { Vin } from '../../model/vin';
import {  AngularFireDatabase } from "angularfire2/database";
import { VinServiceProvider } from '../../providers/vin-service/vin-service';


/**
 * Generated class for the AjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajout',
  templateUrl: 'ajout.html',
})
export class AjoutPage {
  domaine : any;
  nom : any;
  type : any;
  quantite:number;

  
  readonly TAG:string = "PageAjout";

  constructor(public navCtrl: NavController, public navParams: NavParams, private service : VinServiceProvider) {

   
  }
  writewine( v : Vin ) {
    console.log("le vin a ajouter" + v.nom);
    this.service.addVin(v).then(ref =>{


    });


    /*firebase.database().ref('users/' + userId +"/vin"+v.nom).set({
   domaine : v.domaine,
   type : v.type,
   quantite : v.quantite

   
    });*/
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutPage');
  }

  // méthode récuperant ce que l'utilsateur à rentré pour ajouter une bouteille
  addBottle(){
    console.log(`${this.TAG} addBottle ${this.domaine}`);
    console.log(`${this.TAG} addBottle ${this.nom}`);
    console.log(`${this.TAG} addBottle ${this.type}`);
    console.log(`${this.TAG} addBottle ${this.quantite}`);

    let vin =new Vin(this.nom,this.domaine,this.quantite,this.type,0) ;
    console.log("vin nom : " + vin.nom);

  this.writewine(new Vin(this.nom,this.domaine,this.quantite,this.type,0));

  }

}
