import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    const  config = {
      apiKey: "AIzaSyBryHy67Y4DEVlbn-rGBsxmd9Po8oumaRE",
      authDomain: "cavevin-469f0.firebaseapp.com",
      databaseURL: "https://cavevin-469f0.firebaseio.com",
      projectId: "cavevin-469f0",
      storageBucket: "",
      messagingSenderId: "605535861249"
    };  firebase.initializeApp(config);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

