import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Vin } from '../../model/vin';
import * as firebase from 'firebase';


/*
  Generated class for the VinServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VinServiceProvider {
  
  listVins : Vin [] = [];
  ref : firebase.database.Reference; 

    private user : any ;
    private    listVin : any; 
    constructor(private db : AngularFireDatabase){
      this.user = firebase.auth().currentUser;
      var  uid;
  
      if (this.user != null) {
        
        uid = this.user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
          console.log("il y a un utilisateur son id est :  " + uid);
                        // this value to authenticate with your backend server, if
                        // you have one. Use User.getToken() instead.
  
                       this.listVin  =this.db.list('users/'+uid+'/listVin' ) ; 
  
      }
      
    }

   getListVin () : Vin [] {

    this.ref= firebase.database().ref('users/tq3svEgOmUTJjCzPAN3zxO8HiAl2/listVin');
    
    // Récupération de la liste des animaux
    this.ref.on('value',ItemSnapShot =>{
      ItemSnapShot.forEach(ItemSnap =>
      {
        this.listVins.push(ItemSnap.val());
        return false;
      });      
    });
   return this.listVins;

  }

    addVin (v:Vin){
      return this.listVin.push(v)
      ;
    }

}
