import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vin } from '../../model/vin';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.wine = this.navParams.get("theWine");
   console.log(this.TAG + "constructeur , vin recupérer : "+ this.wine.nom);
   
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
