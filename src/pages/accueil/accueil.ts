import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Vin } from '../../model/vin';
import { Utils } from '../../model/utils';
import * as firebase from 'firebase'
import { HomePage } from '../home/home';

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
  constructor(public navCtrl: NavController, public navParams: NavParams ,private  db : AngularFireDatabase) {
   
    firebase.auth().signInWithEmailAndPassword("k@gmail.com","root72");

    this.id = Utils.getUserId();
    this.listRef = this.db.list('users/'+this.id+'/listVin');
    this.listRef.subscribe(x=>   this.nbVin = x.length);
    console.log("nombre de bouteilles : " + this.nbVin);
    
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
this.navCtrl.push('ComptePage');

  }
}
