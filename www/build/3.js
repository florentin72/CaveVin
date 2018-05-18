webpackJsonp([3],{

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilPageModule", function() { return AccueilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accueil__ = __webpack_require__(332);
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

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccueilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
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
    function AccueilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    AccueilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accueil',template:/*ion-inline-start:"C:\Users\flore\OneDrive\Bureau\Cours\ionic\CaveVin\Cave\src\pages\accueil\accueil.html"*/'<!--\n  Generated template for the AccueilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>accueil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page">\n\n  <ion-card  (click) = "onClickListVin()">\n    <img src="img/cave.jpg"/>\n    <div class="card-title">Ma cave </div>\n    <div class="card-subtitle">41 bouteilles ( mettre le vrai nombre de bouteilles ) </div>\n  </ion-card>\n\n  <ion-card   (click) = "onClickAjoutVin()">\n    <img src="img/bouteilles.jpg"/>\n    <div class="card-title">Ajouter une bouteille</div>\n    \n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\flore\OneDrive\Bureau\Cours\ionic\CaveVin\Cave\src\pages\accueil\accueil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AccueilPage);
    return AccueilPage;
}());

//# sourceMappingURL=accueil.js.map

/***/ })

});
//# sourceMappingURL=3.js.map