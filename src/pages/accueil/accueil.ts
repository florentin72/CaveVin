import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Vin } from '../../model/vin';
import { Utils } from '../../model/utils';
import * as firebase from 'firebase'
import { HomePage } from '../home/home';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';

/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {
  readonly TAG : string = "PageAccueil";
  listVins : Vin [] = [];

  listRef : FirebaseListObservable<Vin[]>;
  id : string;
  nbVin : any;
  pers : Personne;
  prixTot : number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams ,private  db : AngularFireDatabase) {
   


    

    this.id = Utils.getUserId();
    this.listRef = this.db.list('users/'+this.id+'/listVin');
    this.listRef.subscribe(items => { 
      const allKeys  = items.map(item => console.log(item.prix)
      
     
       );
       let i : number = 0
       while ( i<35){
       console.log("all  keys : "+allKeys.keys().next().value + "passage numero : " + i) ;
        i++;
       }
       this.nbVin = Item.length;
    });
     
    
    
    
    
  }

  ionViewDidLoad() {


    console.log('ionViewDidLoad AccueilPage');
  }

  onClickListVin(){

    this.navCtrl.push('ListvinPage');
  }
  onClickAjoutVin(){

    this.navCtrl.push('AjoutPage');

  }
  logout(){

console.log("on va se deconnecter");
    firebase.auth().signOut();
    this.navCtrl.setRoot(HomePage);
  }

  onClickCompte(){
this.navCtrl.push('ComptePage', {theList : this.listRef});

  }
}
