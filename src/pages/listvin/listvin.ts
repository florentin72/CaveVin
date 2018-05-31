import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VinServiceProvider } from '../../providers/vin-service/vin-service';
import { Vin } from '../../model/vin';
import * as firebase from 'firebase'
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Utils } from '../../model/utils';
import { stringify } from '@angular/compiler/src/util';
import { Observable } from 'rxjs/Observable';


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
this.listRef.subscribe(x=> console.log("taille du tableau "+x.keys()  ));
console.log("tentative de récupération de l'id d'un noeud " +firebase.database().ref().child('users/TxQfKJWKvthBYAExYu7qucnKaoQ2/listVin').child);


console.log(this.TAG + "constructeur reference du noeud :  " + this.listRef);



    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListvinPage');
  }

  onClickInfo(wine : Vin, ref : string ){


    console.log(this.TAG + " onClickInfo " + ref );
    
    
    this.navCtrl.push('InfoPage',{theWine : wine} );


  }

}
