import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {Firebase} from '@ionic-native/firebase';
import * as firebase from 'firebase';
import { VinServiceProvider } from '../providers/vin-service/vin-service';


const  config = {
  apiKey: "AIzaSyBryHy67Y4DEVlbn-rGBsxmd9Po8oumaRE",
  authDomain: "cavevin-469f0.firebaseapp.com",
  databaseURL: "https://cavevin-469f0.firebaseio.com",
  projectId: "cavevin-469f0",
  storageBucket: "",
  messagingSenderId: "605535861249"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VinServiceProvider
  ]
})
export class AppModule {}
