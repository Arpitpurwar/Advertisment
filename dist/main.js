(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/advertising-slide/advertising-slide.component.html":
/*!********************************************************************!*\
  !*** ./src/app/advertising-slide/advertising-slide.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-carousel #carousel [interval]=\"timePerSlide\" [showNavigationArrows]=\"showNavigationArrows\" [showNavigationIndicators]=\"showNavigationIndicators\" (slide)=\"onSlide($event)\">\n    <ng-template ngbSlide *ngFor = \"let slideDataSets of slideData\">\n      <div class=\"picsum-img-wrapper\">\n        <img *ngIf=\"slideDataSets.vidUrl==undefined\" [src]=\"slideDataSets.url\" class=\"slider-img\" alt=\"Random first slide\">\n        <div *ngIf=\"slideDataSets.vidUrl!=undefined\" class=\"video-container\">\n            <iframe [src]=\"returnSanitizedUrl(slideDataSets.vidUrl)\" allow=\"autoplay; encrypted-media;\" allowfullscreen></iframe>\n            <!-- <video class=\"video-fluid z-depth-1\" autoplay loop controls muted>\n              <source [src]=\"returnSanitedUrl(slideDataSets.vidUrl)\" type=\"video/mp4\" />\n          </video> -->\n        </div>  \n      </div>\n    </ng-template>\n  </ngb-carousel>\n"

/***/ }),

/***/ "./src/app/advertising-slide/advertising-slide.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/advertising-slide/advertising-slide.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider-img {\n  height: 100vh;\n  display: block;\n  margin: 0 auto; }\n\n.video-container {\n  position: relative;\n  padding-bottom: 54.3%;\n  padding-top: 30px;\n  height: 0;\n  overflow: hidden; }\n\n.video-container iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow-y: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWR2ZXJ0aXNpbmctc2xpZGUvQzpcXFVzZXJzXFxBYmhpc2hla05lb2dpXFxWU19Xb3Jrc3BhY2VcXFRlc3RQcm9qZWN0c1xcVEFDIEFkdmVydGlzaW5nXFx0YWMtYWR2dC9zcmNcXGFwcFxcYWR2ZXJ0aXNpbmctc2xpZGVcXGFkdmVydGlzaW5nLXNsaWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsU0FBUztFQUNULGdCQUFnQixFQUFBOztBQUdoQjtFQUNBLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZHZlcnRpc2luZy1zbGlkZS9hZHZlcnRpc2luZy1zbGlkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXItaW1nIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4udmlkZW8tY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1ib3R0b206IDU0LjMlO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIGhlaWdodDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAudmlkZW8tY29udGFpbmVyIGlmcmFtZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/advertising-slide/advertising-slide.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/advertising-slide/advertising-slide.component.ts ***!
  \******************************************************************/
/*! exports provided: AdvertisingSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisingSlideComponent", function() { return AdvertisingSlideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _providers_constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/constants.service */ "./src/app/providers/constants.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var AdvertisingSlideComponent = /** @class */ (function () {
    function AdvertisingSlideComponent(config, constantsService, sanitizer, renderer) {
        var _this = this;
        this.constantsService = constantsService;
        this.sanitizer = sanitizer;
        this.renderer = renderer;
        this.showNavigationArrows = false;
        this.showNavigationIndicators = false;
        this.timePerSlide = 1000;
        // customize default values of carousels used by this component tree
        config.showNavigationArrows = false;
        config.showNavigationIndicators = false;
        renderer.listenGlobal('document', 'touchend', function (e) {
            _this.openFullscreen();
        });
        renderer.listenGlobal('document', 'click', function (e) {
            _this.openFullscreen();
        });
    }
    AdvertisingSlideComponent.prototype.ngOnInit = function () {
        this.slideData = this.constantsService.data;
        console.log('Slide data', this.slideData);
        // this.openFullscreen();
        this.elem = document.documentElement;
    };
    AdvertisingSlideComponent.prototype.returnSanitizedUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    // tslint:disable-next-line: use-life-cycle-interface
    AdvertisingSlideComponent.prototype.ngAfterViewInit = function () {
        // this.carousel.pause();
        this.openFullscreen();
        this.getLocation();
    };
    AdvertisingSlideComponent.prototype.onSlide = function (slideEvent) {
        console.log('TIME LAPSE FOR SLIDE', slideEvent.current);
        var slideIndex = slideEvent.current.split('-');
        this.timePerSlide = this.constantsService.data[slideIndex[slideIndex.length - 1]].time;
    };
    AdvertisingSlideComponent.prototype.openFullscreen = function () {
        if (this.elem.requestFullscreen) {
            this.elem.requestFullscreen();
        }
        else if (this.elem.mozRequestFullScreen) {
            /* Firefox */
            this.elem.mozRequestFullScreen();
        }
        else if (this.elem.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            this.elem.webkitRequestFullscreen();
        }
        else if (this.elem.msRequestFullscreen) {
            /* IE/Edge */
            this.elem.msRequestFullscreen();
        }
    };
    AdvertisingSlideComponent.prototype.getLocation = function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log('Latitude : ' + position.coords.latitude);
            console.log('Longitude : ' + position.coords.longitude);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"])
    ], AdvertisingSlideComponent.prototype, "carousel", void 0);
    AdvertisingSlideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-advertising-slide',
            template: __webpack_require__(/*! ./advertising-slide.component.html */ "./src/app/advertising-slide/advertising-slide.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]],
            styles: [__webpack_require__(/*! ./advertising-slide.component.scss */ "./src/app/advertising-slide/advertising-slide.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"], _providers_constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
    ], AdvertisingSlideComponent);
    return AdvertisingSlideComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-advertising-slide></app-advertising-slide>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-core';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _advertising_slide_advertising_slide_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advertising-slide/advertising-slide.component */ "./src/app/advertising-slide/advertising-slide.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _providers_constants_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/constants.service */ "./src/app/providers/constants.service.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _advertising_slide_advertising_slide_component__WEBPACK_IMPORTED_MODULE_4__["AdvertisingSlideComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            providers: [_providers_constants_service__WEBPACK_IMPORTED_MODULE_6__["ConstantsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/providers/constants.service.ts":
/*!************************************************!*\
  !*** ./src/app/providers/constants.service.ts ***!
  \************************************************/
/*! exports provided: ConstantsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantsService", function() { return ConstantsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConstantsService = /** @class */ (function () {
    function ConstantsService() {
        this.data = [
            {
                url: './assets/imgs/1_People360.png',
                time: 10000
            },
            {
                url: './assets/imgs/2_CoachMe.png',
                time: 10000
            },
            {
                url: './assets/imgs/3_Badges.png',
                time: 10000
            },
            {
                url: './assets/imgs/4_Lighthouse.png',
                time: 10000
            },
            {
                url: './assets/imgs/a.png',
                time: 5000
            },
            {
                url: './assets/imgs/b.png',
                time: 5000
            },
            {
                url: './assets/imgs/c.png',
                time: 5000
            }
        ];
        this.rootConstants = {
            accessRoot: 'https://ui-garage-insights.eu-gb.mybluemix.net/'
        };
    }
    ConstantsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConstantsService);
    return ConstantsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\AbhishekNeogi\VS_Workspace\TestProjects\TAC Advertising\tac-advt\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map