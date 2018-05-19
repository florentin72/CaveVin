import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VinServiceProvider } from '../../providers/vin-service/vin-service';
import { Vin } from '../../model/vin';
import * as firebase from 'firebase'
import { FirebaseListObservable } from 'angularfire2/database';


/**
 * Generated class for the ListvinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listvin',
  templateUrl: 'listvin.html',
})
export class ListvinPage {

readonly TAG = "PageListVin";
listVins :FirebaseListObservable<any[]>;


ref : firebase.database.Reference; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private service : VinServiceProvider) {


    this.ref= firebase.database().ref('users/TxQfKJWKvthBYAExYu7qucnKaoQ2/');
    
    // Récupération de la liste des pinards
    this.ref.on('value',ItemSnapShot =>{
      ItemSnapShot.forEach(ItemSnap =>
      {
        this.listVins.push(ItemSnap.val());
        return false;
      });      
    });
    
  
    console.log(this.TAG + "constructeur \n " + this.listVins);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListvinPage');
  }

  onClickInfo(){

    this.navCtrl.push('InfoPage');


  }

}
