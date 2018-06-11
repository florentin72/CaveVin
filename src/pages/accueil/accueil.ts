import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Vin } from '../../model/vin';
import { Utils } from '../../model/utils';
import * as firebase from 'firebase'
import { HomePage } from '../home/home';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';
import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { VinServiceProvider } from '../../providers/vin-service/vin-service';

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
  ref : firebase.database.Reference; 

  listRef : FirebaseListObservable<Vin[]>;
  id : string;
  nbVin : any;
  pers : Personne;
  prixTot : number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams ,private  db : AngularFireDatabase,private service : VinServiceProvider) {
   
    this.id = Utils.getUserId();
    this.listVins = service.getListVin();
    console.log(`${this.TAG} listAnnonces taille: ${this.listVins.length}`);
    console.log(Utils.getUserId());
    
       this.listRef = this.db.list('users/'+this.id+'/listVin');

      let v : Vin;
      this.listRef.subscribe(items => {console.log(items.forEach(element => {
        console.log(element.nom);
        if (element.nom != undefined){
        v = new Vin(element.nom,element.domaine,element.type,element.prix,element.quantite,element.commentaire, element.millesime);
        
        this.listVins.push(v);
        }
      }));
      
    // console.log("La liste de vin recuperer "+this.listVins[0].nom);
    });
    
    this.nbVin = this.listVins.length;
    
    
  }

  ionViewDidLoad() {


    console.log('ionViewDidLoad AccueilPage');
  }

  onClickListVin(){

    this.navCtrl.push('ListvinPage', {vinList : this.listVins});
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
this.navCtrl.push('ComptePage', {theList : this.listVins});

  }
}
