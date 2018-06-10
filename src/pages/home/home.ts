import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import * as firebase from 'firebase'
import { Utils } from '../../model/utils';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items: Array<any> = [];
  public user: firebase.database.Reference ;
  mail : string;
  mdp1 : string;
  mdp2: string;
  utilisateur: any;
  test: string;
  readonly TAG:string = 'PageHome';
  password : string;
  username: string;

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
    console.log(`${this.TAG} constructor`);

  }
 
  writeUserData(userId, name, email) {

     
      

      if (firebase.database().ref('users/' + userId) == null )
  {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
    
    });
    console.log("WriteUserData un utilisateur a ete ajouté");

  }
  }

  async connexion(){



    
  console.log(`${this.TAG} onClickAccueil ${this.username}`);
  console.log(`${this.TAG} onClickAccueil ${this.password}`);

  
  
  if (firebase.auth().signInWithEmailAndPassword(this.username,this.password).then())
  {


    var uid = Utils.getUserId();


    //this.writeUserData(uid,name,email);
    console.log("recuperation  d'info " + firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.username,this.password));
    
    console.log(`${this.TAG} onClickAccueil ${"le mot de passe est bon"}`);

  this.navCtrl.setRoot('AccueilPage');
 

  }
  else
  {
      

    console.log(`${this.TAG} onClickAccueil ${"erreur de mot passe "}`);
    let alert = this.alertCtrl.create({
      title: 'Erreur de connexion',
      subTitle: 'Mauvais mode de passe',
      buttons: ['Dismiss']
    });
    alert.present();
  

  }

  }

   createAccount(){


      if (this.mdp1 == this.mdp2){
       firebase.auth().createUserWithEmailAndPassword(this.mail,this.mdp1).then();
       firebase.auth().signInWithEmailAndPassword(this.mail,this.mdp1);
       this.navCtrl.setRoot('AccueilPage');
       
  }

      else {


        alert("les mots de passes sont différents")

      } 


  }
}