webpackJsonp([0],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutPageModule", function() { return AjoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ajout__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AjoutPageModule = /** @class */ (function () {
    function AjoutPageModule() {
    }
    AjoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ajout__["a" /* AjoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ajout__["a" /* AjoutPage */])
            ],
        })
    ], AjoutPageModule);
    return AjoutPageModule;
}());

//# sourceMappingURL=ajout.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_vin__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vin_service_vin_service__ = __webpack_require__(216);
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
 * Generated class for the AjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AjoutPage = /** @class */ (function () {
    function AjoutPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.TAG = "PageAjout";
    }
    AjoutPage.prototype.writewine = function (v) {
        console.log("le vin a ajouter" + v.nom);
        this.service.addVin(v).then(function (ref) {
        });
        /*firebase.database().ref('users/' + userId +"/vin"+v.nom).set({
       domaine : v.domaine,
       type : v.type,
       quantite : v.quantite
    
       
        });*/
    };
    AjoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AjoutPage');
    };
    // méthode récuperant ce que l'utilsateur à rentré pour ajouter une bouteille
    AjoutPage.prototype.addBottle = function () {
        console.log(this.TAG + " addBottle " + this.domaine);
        console.log(this.TAG + " addBottle " + this.nom);
        console.log(this.TAG + " addBottle " + this.type);
        console.log(this.TAG + " addBottle " + this.quantite);
        var vin = new __WEBPACK_IMPORTED_MODULE_2__model_vin__["a" /* Vin */](this.nom, this.domaine, this.quantite, this.type, 0);
        console.log("vin nom : " + vin.nom);
        this.writewine(new __WEBPACK_IMPORTED_MODULE_2__model_vin__["a" /* Vin */](this.nom, this.domaine, this.quantite, this.type, 0));
    };
    AjoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ajout',template:/*ion-inline-start:"C:\Users\flore\OneDrive\Bureau\Cours\ionic\CaveVin\Cave\src\pages\ajout\ajout.html"*/'<!--\n  Generated template for the AjoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ajout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h1>Ajouter une bouteille</h1>\n  <ion-list>\n\n\n    <ion-item>\n        <ion-label>Domaine</ion-label>\n        <ion-input type = "text"[(ngModel)]="domaine" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Nom</ion-label>\n        <ion-input id= "name" type = "text" [(ngModel)]= "nom"> </ion-input>\n    </ion-item>\n\n\n\n    <ion-item>\n        <ion-label>Type de Vin </ion-label>\n      <ion-select  [(ngModel)]="type">\n          \n\n        <ion-option value="rouge">Vin Rouge</ion-option>\n        <ion-option value="blanc">Vin Blanc</ion-option>\n        <ion-option value="rose">Vin Rosé</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item>\n        <ion-label>Quantité</ion-label>\n        <ion-input type = "number" min = "1"  [(ngModel)]="quantite"></ion-input>\n    </ion-item>\n\n</ion-list> \n<button ion-button  (click)="addBottle()"> valider </button> \n</ion-content>\n'/*ion-inline-end:"C:\Users\flore\OneDrive\Bureau\Cours\ionic\CaveVin\Cave\src\pages\ajout\ajout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_vin_service_vin_service__["a" /* VinServiceProvider */]])
    ], AjoutPage);
    return AjoutPage;
}());

//# sourceMappingURL=ajout.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vin; });
var Vin = /** @class */ (function () {
    function Vin(n, d, q, t, p) {
        this.nom = n;
        this.domaine = d;
        this.nom = n;
        this.type = t;
        this.prix = p;
    }
    return Vin;
}());

//# sourceMappingURL=vin.js.map

/***/ })

});
//# sourceMappingURL=0.js.map