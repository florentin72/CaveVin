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
  listVin : FirebaseListObservable<Vin[]>;
  readonly TAG  : string = "PageCompte";
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.listVin = this.navParams.get("theList");
    console.log(this.TAG + this.listVin);
    this.listVin.subscribe(x=> console.log("taille du tableau " ));


  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComptePage');
  }

}
