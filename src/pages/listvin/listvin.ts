import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VinServiceProvider } from '../../providers/vin-service/vin-service';
import { Vin } from '../../model/vin';
import * as firebase from 'firebase'
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Utils } from '../../model/utils';


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
listVins : Vin [] = [];

listRef : FirebaseListObservable<Vin[]>;
id : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private service : VinServiceProvider,private  db : AngularFireDatabase) {
this.id = Utils.getUserId();
this.listRef = this.db.list('users/'+this.id+'/listVin');
this.listRef.subscribe(x=> console.log("des trucs"+x.length));

   /* this.ref= firebase.database().ref("users/tq3svEgOmUTJjCzPAN3zxO8HiAl2/listVin");
    
    // Récupération de la liste des pinards
    this.ref.on('value',ItemSnapShot =>{
      ItemSnapShot.forEach(ItemSnap =>
      {
        this.listVins.push(ItemSnap.val());
        return false;
      });      
    });*/





    console.log(`${this.TAG} listVins taille: ${this.listVins.length}`);

    console.log(this.TAG + "constructeur \n " + this.listVins[0]);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListvinPage');
  }

  onClickInfo(wine : Vin ){


    
    
    this.navCtrl.push('InfoPage',{theWine : wine} );


  }

}
