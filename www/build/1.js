webpackJsonp([1],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilPageModule", function() { return AccueilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accueil__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccueilPageModule = /** @class */ (function () {
    function AccueilPageModule() {
    }
    AccueilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__accueil__["a" /* AccueilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__accueil__["a" /* AccueilPage */]),
            ],
        })
    ], AccueilPageModule);
    return AccueilPageModule;
}());

//# sourceMappingURL=accueil.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vin; });
var Vin = /** @class */ (function () {
    function Vin(n, d, t, p, q, com) {
        this.domaine = d;
        this.nom = n;
        this.type = t;
        this.prix = p;
        this.quantite = q;
        this.commentaire = com;
    }
    Vin.prototype.toString = function () {
        return "Le vin " + this.nom + " domaine " + this.domaine + " prix :  " + this.prix;
    };
    return Vin;
}());

//# sourceMappingURL=vin.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccueilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_vin__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_utils__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_vin_service_vin_service__ = __webpack_require__(216);
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
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccueilPage = /** @class */ (function () {
    function AccueilPage(navCtrl, navParams, db, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.service = service;
        this.TAG = "PageAccueil";
        this.listVins = [];
        this.prixTot = 0;
        this.id = __WEBPACK_IMPORTED_MODULE_4__model_utils__["a" /* Utils */].getUserId();
        this.listVins = service.getListVin();
        console.log(this.TAG + " listAnnonces taille: " + this.listVins.length);
        this.listRef = this.db.list('users/' + this.id + '/listVin');
        var v;
        this.listRef.subscribe(function (items) {
            console.log(items.forEach(function (element) {
                console.log(element.nom);
                v = new __WEBPACK_IMPORTED_MODULE_3__model_vin__["a" /* Vin */](element.nom, element.domaine, element.type, element.prix, element.quantite, element.commentaire);
                _this.listVins.push(v);
            }));
            console.log("La liste de vin recuperer " + _this.listVins[0].nom);
        });
    }
    AccueilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccueilPage');
    };
    AccueilPage.prototype.onClickListVin = function () {
        this.navCtrl.push('ListvinPage');
    };
    AccueilPage.prototype.onClickAjoutVin = function () {
        this.navCtrl.push('AjoutPage');
    };
    AccueilPage.prototype.logout = function () {
        console.log("on va se deconnecter");
        __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    AccueilPage.prototype.onClickCompte = function () {
        this.navCtrl.push('ComptePage', { theList: this.listRef });
    };
    AccueilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accueil',template:/*ion-inline-start:"C:\Users\flore\OneDrive\Bureau\Cours\ionic\CaveVin\Cave\src\pages\accueil\accueil.html"*/'<!--\n  Generated template for the AccueilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header  >\n  <ion-col>\n    <div>Cave</div>\n  </ion-col>\n \n \n \n   \n    <ion-icon class="logout" name="log-out" (click) = "logout()"></ion-icon>\n\n \n</ion-header>\n\n\n    \n\n\n\n<ion-content class="card-background-page">\n\n\n  <ion-card  (click) = "onClickListVin()">\n    <img src="img/cave.jpg"/>\n    <div class="card-title">Ma cave </div>\n    <div class="card-subtitle">{{this.nbVin}} bouteilles  </div>\n  </ion-card>\n\n  <ion-card   (click) = "onClickAjoutVin()">\n    <img src="img/bouteilles.jpg"/>\n    <div class="card-title">Ajouter une bouteille</div>\n    \n  </ion-card>\n\n  <ion-card   (click) = "onClickCompte()">\n    <img src="img/info.jpg"/>\n    <div class="card-title">Informations sur la cave</div>\n    \n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\flore\OneDrive\Bureau\Cours\ionic\CaveVin\Cave\src\pages\accueil\accueil.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__providers_vin_service_vin_service__["a" /* VinServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_vin_service_vin_service__["a" /* VinServiceProvider */]) === "function" && _d || Object])
    ], AccueilPage);
    return AccueilPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=accueil.js.map

/***/ })

});
//# sourceMappingURL=1.js.map