import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';


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
  user : any ;
  
  readonly TAG:string = "PageAjout";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = firebase.auth().currentUser;
    var  uid;
   let  p = new Personne("f","f","r");

    if (this.user != null) {
      
      uid = this.user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
        console.log("il y a un utilisateur son id est :  " + uid);
                      // this value to authenticate with your backend server, if
                      // you have one. Use User.getToken() instead.

                

    }
   
  }
  writewine(userId , v : Vin ) {
    console.log("le vin a ajouter" + v.nom);
    
    firebase.database().ref('users/' + userId +"/vin"+v.nom).set({
   domaine : v.domaine,
   type : v.type,
   quantite : v.quantite

   
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutPage');
  }

  // méthode récuperant ce que l'utilsateur à rentré pour ajouter une bouteille
  addBottle(){
    console.log(`${this.TAG} addBottle ${this.domaine}`);
    console.log(`${this.TAG} addBottle ${this.nom}`);
    console.log(`${this.TA