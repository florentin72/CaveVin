import * as firebase from 'firebase'
import { FirebaseListObservable } from 'angularfire2/database';
import { Vin } from './vin';
import { HomePage } from '../pages/home/home';
export class Utils {

public static getUserId(): string{

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
return uid;
}

}