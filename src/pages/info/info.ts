import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vin } from '../../model/vin';
import { firestore } from 'firebase';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  readonly TAG = "PageInfo"
  wine : Vin;
  quantity : number;
  listVins : Vin [] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private  db : AngularFireDatabase) {
   this.wine = this.navParams.get("theWine");
   console.log(this.TAG + "constructeur , vin recupérer : "+ this.wine.nom);
   
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }


  changeQuantite(){

    //TODO récuperer l'id dans firebase de l'objet 
console.log("quantite a retirer" + this.quantity);

    this.listVins.forEach(element => {
      
      if (element.commentaire == this.wine.commentaire && element.domaine == this.wine.domaine && this.wine.nom == element.nom && element.prix == this.wine.prix && this.wine.quantite == element.quantite && element.type == this.wine.type){


        console.log("element trouvé");
        
        if (element.quantite - this.quantity == 0){

          console.log("plus de bouteille");
          
          

            

        }
        else{


          element.quantite = element.quantite - this.quantity*1;
          console.log("quantite nouvelle " +element.quantite );
        }


      

      }


    });



    

    this.navCtrl.setRoot('AccueilPage');

  }
}
