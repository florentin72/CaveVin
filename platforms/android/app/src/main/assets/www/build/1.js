webpackJsonp([1],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListvinPageModule", function() { return ListvinPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listvin__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListvinPageModule = /** @class */ (function () {
    function ListvinPageModule() {
    }
    ListvinPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__listvin__["a" /* ListvinPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__listvin__["a" /* ListvinPage */]),
            ],
        })
    ], ListvinPageModule);
    return ListvinPageModule;
}());

//# sourceMappingURL=listvin.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListvinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vin_service_vin_service__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_utils__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ListvinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListvinPage = /** @class */ (function () {
    function ListvinPage(navCtrl, navParams, service, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.db = db;
        this.TAG = "PageListVin";
        this.listVins = [];
        this.id = __WEBPACK_IMPORTED_MODULE_4__model_utils__["a" /* Utils */].getUserId();
        this.listRef = this.db.list('users/' + this.id + '/listVin');
        this.listRef.subscribe(function (x) { return console.log("des trucs" + x.length); });
        /* this.ref= firebase.database().ref("users/tq3svEgOmUTJjCzPAN3zxO8HiAl2/listVin");
         
         // Récupération de la liste des pinards
         this.ref.on('value',ItemSnapShot =>{
           ItemSnapShot.forEach(ItemSnap =>
           {
             this.listVins.push(ItemSnap.val());
             return false;
           });
         });*/
        console.log(this.TAG + " listVins taille: " + this.listVins.length);
        console.log(this.TAG + "constructeur \n " + this.listVins[0]);
    }
    ListvinPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListvinPage');
    };
    ListvinPage.prototype.onClickInfo = function (wine) {
        this.navCtrl.push('InfoPage', { theWine: wine });
    };
    ListvinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listvin',template:/*ion-inline-start:"C:\Users\flore\OneDrive\Bureau\Cours\ionic\CaveVin\Cave\src\pages\listvin\listvin.html"*/'<!--\n  Generated template for the ListvinPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>listvin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor = "let wine of listRef | async">\n      <ion-thumbnail item-start>\n        <img src="img/bottle.jpg">\n      </ion-thumbnail>\n      <h2>{{wine.nom}} </h2>\n      <p>quantité </p>\n      <button ion-button clear item-end  (click) = "onClickInfo(wine)">View</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\flore\OneDrive\Bureau\Cours\ionic\CaveVin\Cave\src\pages\listvin\listvin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_vin_service_vin_service__["a" /* VinServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ListvinPage);
    return ListvinPage;
}());

//# sourceMappingURL=listvin.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.getUserId = function () {
        var user = __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().currentUser;
        var name, email, photoUrl, uid, emailVerified;
        if (user != null) {
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
            console.log("il y a un utilisateur son id est :  " + uid);
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
        }
        return uid;
    };
    return Utils;
}());

//# sourceMappingURL=utils.js.map

/***/ })

});
//# sourceMappingURL=1.js.map