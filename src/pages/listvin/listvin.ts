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
  constructor(public navCtrl: NavController, public navParams: NavParams, private service : VinServiceProvider) {

    var list = this.service.getListVin;

    console.log(list.toString);
    
  
    console.log(this.TAG + "constructeur \n " + service.getListVin);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListvinPage');
  }

  onClickInfo(){

    this.navCtrl.push('InfoPage');


  }

}
