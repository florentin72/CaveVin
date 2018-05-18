import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import * as firebase from 'firebase'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items: Array<any> = [];
  public user: firebase.database.Reference ;
  mail : any;
  mdp1 : any;
  mdp2: any;
  utilisateur: any;
  test: any;
  readonly TAG:string = 'PageHome';
  password : any;
  username: any;

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
    console.log(`${this.TAG} constructor`);

  }
 
  writeUserData(userId, name, email) {

     
      

      if (firebase.database().ref('users/' + userId).key == null )
  {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
    
    });
    console.log("WriteUserData un utilisateur a ete ajouté");

  }
  }

  connexion(){



    
  console.log(`${this.TAG} onClickAccueil ${this.username}`);
  console.log(`${this.TAG} onClickAccueil ${this.password}`);

  
  
  if (firebase.auth().signInWithEmailAndPassword(this.username,this.password).then)
  {

    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
        console.log("il y a un utilisateur son id est :  " + uid);
                      // this value to authenticate with your backend server, if
                      // you have one. Use User.getToken() instead.
                      




    }
    //this.writeUserData(uid,name,email);
    console.log("recuperation  d'info " + firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.username,this.password));
    
    console.log(`${this.TAG} onClickAccueil ${"le mot de passe est bon"}`);

  this.navCtrl.push('AccueilPage');
 

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
       firebase.auth().createUserWithEmailAndPassword(this.mail,this.mdp1);
     
       this.navCtrl.push('AccueilPage');
       
  }

      else {


        alert("les mots de passes sont différents")

      } 


  }
}