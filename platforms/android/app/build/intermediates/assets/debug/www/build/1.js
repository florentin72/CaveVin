webpackJsonp([1],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListvinPageModule", function() { return ListvinPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listvin__ = __webpack_require__(339);
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

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListvinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vin_service_vin_service__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_utils__ = __webpack_require__(216);
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
        this.id = __WEBPACK_IMPORTED_MODULE_5__model_utils__["a" /* Utils */].getUserId();
        this.listRef = this.db.list('users/' + this.id + '/listVin');
        this.listRef.subscribe(function (x) { return console.log("taille du tableau " + x.keys()); });
        console.log("tentative de récupération de l'id d'un noeud " + __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref().child('users/TxQfKJWKvthBYAExYu7qucnKaoQ2/listVin').child);
        console.log(this.TAG + "constructeur reference du noeud :  " + this.listRef);
    }
    ListvinPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListvinPage');
    };
    ListvinPage.prototype.onClickInfo = function (wine, ref) {
        console.log(this.TAG + " onClickInfo " + ref);
        this.navCtrl.push('InfoPage', { theWine: wine });
    };
    ListvinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listvin',template:/*ion-inline-start:"C:\Users\flore\OneDrive\Bureau\Cours\ionic\CaveVin\Cave\src\pages\listvin\listvin.html"*/'<!--\n  Generated template for the ListvinPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n    \n  <ion-col>\n    <div>Cave</div>\n  </ion-col>\n \n \n</ion-header>\n\n\n\n<ion-content padding class="master">\n\n  <ion-list>\n    <ion-item *ngFor = "let wine of listRef | async">\n      <ion-thumbnail item-start>\n        <img src="img/bottle.jpg">\n      </ion-thumbnail>\n      <h2>{{wine.nom}} </h2>\n      <p>quantité </p>\n      <button ion-button clear item-end  (click) = "onClickInfo(wine, listRef.$ref)">View</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\flore\OneDrive\Bureau\Cours\ionic\CaveVin\Cave\src\pages\listvin\listvin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_vin_service_vin_service__["a" /* VinServiceProvider */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ListvinPage);
    return ListvinPage;
}());

//# sourceMappingURL=listvin.js.map

/***/ })

});
//# sourceMappingURL=1.js.map