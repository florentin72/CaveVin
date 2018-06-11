webpackJsonp([3],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfoPageModule = /** @class */ (function () {
    function InfoPageModule() {
    }
    InfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__info__["a" /* InfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info__["a" /* InfoPage */]),
            ],
        })
    ], InfoPageModule);
    return InfoPageModule;
}());

//# sourceMappingURL=info.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(115);
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
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.TAG = "PageInfo";
        this.listVins = [];
        this.wine = this.navParams.get("theWine");
        console.log(this.TAG + "constructeur , vin recupérer : " + this.wine.nom);
    }
    InfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPage');
    };
    InfoPage.prototype.changeQuantite = function () {
        var _this = this;
        //TODO récuperer l'id dans firebase de l'objet 
        console.log("quantite a retirer" + this.quantity);
        this.listVins.forEach(function (element) {
            if (element.commentaire == _this.wine.commentaire && element.domaine == _this.wine.domaine && _this.wine.nom == element.nom && element.prix == _this.wine.prix && _this.wine.quantite == element.quantite && element.type == _this.wine.type) {
                console.log("element trouvé");
                if (element.quantite - _this.quantity == 0) {
                    console.log("plus de bouteille");
                }
                else {
                    element.quantite = element.quantite - _this.quantity * 1;
                    console.log("quantite nouvelle " + element.quantite);
                }
            }
        });
        this.navCtrl.setRoot('AccueilPage');
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"C:\Users\flore\OneDrive\Bureau\Cours\ionic\CaveVin\Cave\src\pages\info\info.html"*/'<!--\n  Generated template for the InfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n    \n  <ion-col>\n    <div>Cave</div>\n  </ion-col>\n \n \n</ion-header>\n\n<ion-content class="master">\n  <ion-list>\n      <ion-item  >\n        <ion-avatar item-start>\n          <img src="img/bottle.jpg">\n        </ion-avatar>\n        <h2> {{this.wine.nom}}</h2>\n        <p>{{this.wine.domaine}} </p>\n      </ion-item>\n      <ion-item >\n        Type\n        <ion-note item-end>\n          {{this.wine.type}}       \n         </ion-note>\n      </ion-item>\n      <ion-item >\n        Prix\n        <ion-note item-end>\n          {{this.wine.prix}}\n        </ion-note>\n      </ion-item>\n      <ion-item >\n        AOC\n        <ion-note item-end>\n         OUI\n        </ion-note>\n      </ion-item>\n      <ion-item >\n        Quantité\n          <ion-note item-end>\n            {{this.wine.quantite}}\n        </ion-note>\n      </ion-item>\n\n      <ion-item >\n        Millesime\n        <ion-note item-end>\n          {{this.wine.millesime}}       \n         </ion-note>\n      </ion-item>\n      <ion-item>\n\n        <ion-range [(ngModel)]="quantity" min = "0"  step = "1" snaps = "true" max = {{this.wine.quantite}} pin = "true " >\n          <ion-icon range-left small name="wine"></ion-icon>\n          <ion-icon range-right name="pint"></ion-icon>  \n        </ion-range>\n        \n      </ion-item>\n      <button  (click)="changeQuantite()" ion-button >A la tienne ! </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\flore\OneDrive\Bureau\Cours\ionic\CaveVin\Cave\src\pages\info\info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ })

});
//# sourceMappingURL=3.js.map