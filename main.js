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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\n  <header>\n    <span>Chirper</span>\n  </header>\n\n  <app-navigation></app-navigation>\n\n  <router-outlet></router-outlet>\n\n  <footer>\n    <p>Chirper SPA © 2018</p>\n  </footer>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication/register/register.component */ "./src/app/authentication/register/register.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_chirp_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/chirp.service */ "./src/app/services/chirp.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _authentication_logout_logout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./authentication/logout/logout.component */ "./src/app/authentication/logout/logout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _discover_discover_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./discover/discover.component */ "./src/app/discover/discover.component.ts");
/* harmony import */ var _user_feed_user_feed_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-feed/user-feed.component */ "./src/app/user-feed/user-feed.component.ts");
/* harmony import */ var _edit_chirp_edit_chirp_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./edit-chirp/edit-chirp.component */ "./src/app/edit-chirp/edit-chirp.component.ts");
/* harmony import */ var _foreign_feed_foreign_feed_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./foreign-feed/foreign-feed.component */ "./src/app/foreign-feed/foreign-feed.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
                _authentication_logout_logout_component__WEBPACK_IMPORTED_MODULE_15__["LogoutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _discover_discover_component__WEBPACK_IMPORTED_MODULE_17__["DiscoverComponent"],
                _user_feed_user_feed_component__WEBPACK_IMPORTED_MODULE_18__["UserFeedComponent"],
                _edit_chirp_edit_chirp_component__WEBPACK_IMPORTED_MODULE_19__["EditChirpComponent"],
                _foreign_feed_foreign_feed_component__WEBPACK_IMPORTED_MODULE_20__["ForeignFeedComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot(),
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _services_chirp_service__WEBPACK_IMPORTED_MODULE_13__["ChirpService"], _services_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/register/register.component */ "./src/app/authentication/register/register.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _authentication_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication/logout/logout.component */ "./src/app/authentication/logout/logout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _authentication_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication/guards/auth.guard */ "./src/app/authentication/guards/auth.guard.ts");
/* harmony import */ var _discover_discover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./discover/discover.component */ "./src/app/discover/discover.component.ts");
/* harmony import */ var _user_feed_user_feed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-feed/user-feed.component */ "./src/app/user-feed/user-feed.component.ts");
/* harmony import */ var _edit_chirp_edit_chirp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-chirp/edit-chirp.component */ "./src/app/edit-chirp/edit-chirp.component.ts");
/* harmony import */ var _foreign_feed_foreign_feed_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./foreign-feed/foreign-feed.component */ "./src/app/foreign-feed/foreign-feed.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'logout', component: _authentication_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"] },
    { path: 'feed', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], canActivate: [_authentication_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'discover', component: _discover_discover_component__WEBPACK_IMPORTED_MODULE_8__["DiscoverComponent"], canActivate: [_authentication_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'profile', component: _user_feed_user_feed_component__WEBPACK_IMPORTED_MODULE_9__["UserFeedComponent"], canActivate: [_authentication_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'feed/:username', component: _foreign_feed_foreign_feed_component__WEBPACK_IMPORTED_MODULE_11__["ForeignFeedComponent"], canActivate: [_authentication_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'editChirp/:id', component: _edit_chirp_edit_chirp_component__WEBPACK_IMPORTED_MODULE_10__["EditChirpComponent"], canActivate: [_authentication_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/authentication/guards/auth.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/authentication/guards/auth.guard.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/authentication/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/authentication/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authentication/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/authentication/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- {{model | json}} -->\n<form id=\"formLogin\" class=\"form chirps\" #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\n  <label>Username</label>\n  <input name=\"username\" type=\"text\" required [(ngModel)]=\"model.username\" #username=\"ngModel\">\n  <label>Password</label>\n  <input name=\"password\" type=\"password\" required [(ngModel)]=\"model.password\" #password=\"ngModel\">\n  <input id=\"btnLogin\" value=\"Sign In\" type=\"submit\">\n  <a routerLink=\"/register\">Register</a>\n</form>\n"

/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_login_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/login.model */ "./src/app/authentication/models/login.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.model = new _models_login_model__WEBPACK_IMPORTED_MODULE_1__["LoginModel"]('', '');
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['/feed']);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model)
            .subscribe(function (data) {
            _this.authService.saveSession(data);
            _this.toastr.success('Login successful.');
            _this.router.navigate(['/feed']);
        }, function (err) {
            _this.toastr.error(err['error']['description'], 'Warning!');
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/authentication/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/authentication/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/authentication/logout/logout.component.css":
/*!************************************************************!*\
  !*** ./src/app/authentication/logout/logout.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authentication/logout/logout.component.html":
/*!*************************************************************!*\
  !*** ./src/app/authentication/logout/logout.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authentication/logout/logout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/logout/logout.component.ts ***!
  \***********************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.logout()
            .subscribe(function (data) {
            _this.toastr.success('Logout successful.');
            sessionStorage.clear();
            _this.authService.authtoken = "";
            _this.router.navigate(['/login']);
        });
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/authentication/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/authentication/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/authentication/models/login.model.ts":
/*!******************************************************!*\
  !*** ./src/app/authentication/models/login.model.ts ***!
  \******************************************************/
/*! exports provided: LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel(username, password) {
        this.username = username;
        this.password = password;
    }
    return LoginModel;
}());



/***/ }),

/***/ "./src/app/authentication/models/register.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/models/register.model.ts ***!
  \*********************************************************/
/*! exports provided: RegisterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModel", function() { return RegisterModel; });
var RegisterModel = /** @class */ (function () {
    function RegisterModel(username, password, repeatPass, subscriptions) {
        if (subscriptions === void 0) { subscriptions = []; }
        this.username = username;
        this.password = password;
        this.repeatPass = repeatPass;
        this.subscriptions = subscriptions;
    }
    return RegisterModel;
}());



/***/ }),

/***/ "./src/app/authentication/register/register.component.css":
/*!****************************************************************!*\
  !*** ./src/app/authentication/register/register.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authentication/register/register.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/register/register.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- {{model | json}} -->\n<form class=\"form chirps\" id=\"formRegister\" #registrationForm=\"ngForm\" (ngSubmit)=\"register()\">\n\n  <label for=\"username\">Username</label>\n  <input name=\"username\" type=\"text\" required [(ngModel)]=\"model.username\" #username=\"ngModel\">\n  <label>Password</label>\n  <input name=\"password\" type=\"password\" required [(ngModel)]=\"model.password\" #password=\"ngModel\">\n  <label>Repeat Password</label>\n  <input name=\"repeatPass\" type=\"password\" required [(ngModel)]=\"model.repeatPass\" #repeatPass=\"ngModel\">\n\n  <input id=\"btnRegister\" value=\"Register\" type=\"submit\" [disabled]=\"registrationForm.form.invalid\">\n  <a routerLink=\"/login\">Log in</a>\n</form>"

/***/ }),

/***/ "./src/app/authentication/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/authentication/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_register_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/register.model */ "./src/app/authentication/models/register.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.model = new _models_register_model__WEBPACK_IMPORTED_MODULE_1__["RegisterModel"]('', '', '');
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        delete this.model['repeatPass'];
        this.authService
            .register(this.model)
            .subscribe(function (data) {
            _this.authService.saveSession(data);
            _this.toastr.success('Registration successful. You are now logged in!');
            _this.router.navigate(['/feed']);
        }, function (err) {
            _this.toastr.error(err['error']['description'], 'Warning!');
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/authentication/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/authentication/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/discover/discover.component.css":
/*!*************************************************!*\
  !*** ./src/app/discover/discover.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/discover/discover.component.html":
/*!**************************************************!*\
  !*** ./src/app/discover/discover.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"chirps\">\n    <h2 class=\"titlebar\">Discover</h2>\n    <div id=\"userlist\">\n      <div class=\"userbox\" *ngFor=\"let u of users\">\n        <div>\n          <a routerLink=\"../feed/{{u.username}}\" class=\"chirp-author\">{{u.username}}</a>\n        </div>\n\n        <div class=\"user-details\">\n          <a class=\"pseudolink\" (click)=\"deleteUser(u._id)\" *ngIf=\"authService.isAdmin()\">delete user </a>\n          <span>{{u.followers}} followers</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/discover/discover.component.ts":
/*!************************************************!*\
  !*** ./src/app/discover/discover.component.ts ***!
  \************************************************/
/*! exports provided: DiscoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverComponent", function() { return DiscoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiscoverComponent = /** @class */ (function () {
    function DiscoverComponent(authService, userService, toastr) {
        this.authService = authService;
        this.userService = userService;
        this.toastr = toastr;
    }
    DiscoverComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    DiscoverComponent.prototype.loadData = function () {
        var _this = this;
        this.userService.loadAllUsers()
            .subscribe(function (users) {
            users.forEach(function (user) {
                user.followers = users.filter(function (u) { return u.subscriptions.includes(user.username); }).length;
            });
            users = users.filter(function (u) { return u.username !== sessionStorage.getItem('username'); });
            users = users.sort(function (a, b) { return b.followers - a.followers; }); // sort by descending followers
            _this.users = users;
        });
    };
    DiscoverComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.deleteUser(id)
            .subscribe(function () {
            _this.toastr.info("User deleted.");
            _this.loadData();
        });
    };
    DiscoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discover',
            template: __webpack_require__(/*! ./discover.component.html */ "./src/app/discover/discover.component.html"),
            styles: [__webpack_require__(/*! ./discover.component.css */ "./src/app/discover/discover.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], DiscoverComponent);
    return DiscoverComponent;
}());



/***/ }),

/***/ "./src/app/edit-chirp/edit-chirp.component.css":
/*!*****************************************************!*\
  !*** ./src/app/edit-chirp/edit-chirp.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-chirp/edit-chirp.component.html":
/*!******************************************************!*\
  !*** ./src/app/edit-chirp/edit-chirp.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"chirper\">\n    <h2 class=\"titlebar\">{{bindingModel.author}}</h2>\n    <form id=\"formSubmitChirp\" class=\"chirp-form\" #formEditChirp=\"ngForm\" (ngSubmit)=\"editChirp()\">\n      <textarea name=\"text\" class=\"chirp-input\" required minlength=\"5\" maxlength=\"150\" [(ngModel)]=\"bindingModel.text\" #text=\"ngModel\"\n        value=\"{{bindingModel.text}}\"></textarea>\n      <input class=\"chirp-submit\" id=\"btnSubmitChirp\" [disabled]=\"formEditChirp.form.invalid\" value=\"Edit\" type=\"submit\">\n    </form>\n\n    <div style=\"color:red\" *ngIf=\"bindingModel.text?.length == 150\">\n      Chirp text cannot be longer than 150 characters!\n    </div>\n\n    <div style=\"color:red\" *ngIf=\"bindingModel.text?.length < 5\">\n      Chirp text must be at least 5 symbols long!\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-chirp/edit-chirp.component.ts":
/*!****************************************************!*\
  !*** ./src/app/edit-chirp/edit-chirp.component.ts ***!
  \****************************************************/
/*! exports provided: EditChirpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditChirpComponent", function() { return EditChirpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chirp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chirp.service */ "./src/app/services/chirp.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_edit_chirp_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/edit-chirp.model */ "./src/app/models/edit-chirp.model.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditChirpComponent = /** @class */ (function () {
    function EditChirpComponent(chirpService, route, router, toastr) {
        this.chirpService = chirpService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.bindingModel = new _models_edit_chirp_model__WEBPACK_IMPORTED_MODULE_3__["EditChirpModel"]('', '', '');
    }
    EditChirpComponent.prototype.ngOnInit = function () {
        var _this = this;
        var chirpId = this.route.snapshot.params['id'];
        this.chirpService.loadChirpById(chirpId)
            .subscribe(function (data) {
            _this.bindingModel = data[0];
        });
    };
    EditChirpComponent.prototype.editChirp = function () {
        var _this = this;
        this.chirpService.editChirp(this.bindingModel._id, this.bindingModel.author, this.bindingModel.text)
            .subscribe(function () {
            _this.toastr.info("Chirp edited");
        });
    };
    EditChirpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-chirp',
            template: __webpack_require__(/*! ./edit-chirp.component.html */ "./src/app/edit-chirp/edit-chirp.component.html"),
            styles: [__webpack_require__(/*! ./edit-chirp.component.css */ "./src/app/edit-chirp/edit-chirp.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chirp_service__WEBPACK_IMPORTED_MODULE_1__["ChirpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], EditChirpComponent);
    return EditChirpComponent;
}());



/***/ }),

/***/ "./src/app/foreign-feed/foreign-feed.component.css":
/*!*********************************************************!*\
  !*** ./src/app/foreign-feed/foreign-feed.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pseudo {\r\n  cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/foreign-feed/foreign-feed.component.html":
/*!**********************************************************!*\
  !*** ./src/app/foreign-feed/foreign-feed.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"chirper\">\n\n    <h2 class=\"titlebar\">{{username}}</h2>\n\n    <a id=\"btnFollow\" class=\"chirp-author\" *ngIf=\"!isFollowed\" (click)=\"followUser()\">Follow</a>\n    <a id=\"btnFollow\" class=\"chirp-author\" *ngIf=\"isFollowed\" (click)=\"unfollowUser()\">Unfollow</a>\n\n    <div id=\"userProfileStats\" class=\"user-details\">\n      <span>{{chirpsCount}} chirps</span> |\n      <span>{{following}} following</span> |\n      <span>{{followers}} followers</span>\n    </div>\n  </div>\n  <div id=\"profileChirps\" class=\"chirps\">\n    <h2 class=\"titlebar\">{{username}}'s chirps</h2>\n    <article class=\"chirp\" *ngFor=\"let c of chirps\">\n      <div class=\"titlebar\">\n        <a routerLink=\"../feed/{{username}}\" class=\"chirp-author\">{{username}}</a>\n        <span class=\"chirp-time\">\n          <a routerLink=\"/editChirp/{{c._id}}\" *ngIf=\"authService.isAdmin()\">edit </a>\n          <a class=\"pseudolink\" (click)=\"deleteChirp(c._id)\" *ngIf=\"authService.isAdmin()\">delete </a> {{c.time}}\n        </span>\n      </div>\n      <p>{{c.text}}</p>\n    </article>\n    <div class=\"chirp\" *ngIf=\"!chirps?.length\">\n      <span class=\"loading\">No chirps in database</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/foreign-feed/foreign-feed.component.ts":
/*!********************************************************!*\
  !*** ./src/app/foreign-feed/foreign-feed.component.ts ***!
  \********************************************************/
/*! exports provided: ForeignFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForeignFeedComponent", function() { return ForeignFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chirp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chirp.service */ "./src/app/services/chirp.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ForeignFeedComponent = /** @class */ (function () {
    function ForeignFeedComponent(authService, chirpService, userService, toastr, route) {
        this.authService = authService;
        this.chirpService = chirpService;
        this.userService = userService;
        this.toastr = toastr;
        this.route = route;
        this.isFollowed = false;
    }
    ForeignFeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.route.snapshot.params['username'];
        this.isFollowed = JSON.parse(sessionStorage.getItem('subscriptions')).includes(this.username);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])([
            this.chirpService.loadAllChirpsByUsername(this.username),
            this.userService.loadUserFollowers(this.username),
            this.userService.loadUserByUsername(this.username)
        ]).subscribe(function (_a) {
            var chirpsArr = _a[0], followersArr = _a[1], user = _a[2];
            _this.chirpsCount = chirpsArr.length;
            _this.following = user[0].subscriptions.length;
            _this.followers = followersArr.length;
            chirpsArr.forEach(function (c) {
                c.time = _this.dateConvertor(c._kmd.ect);
                c.isAuthor = c.author === sessionStorage.getItem('username');
            });
            _this.chirps = chirpsArr;
        });
    };
    ForeignFeedComponent.prototype.followUser = function () {
        var _this = this;
        var userId = sessionStorage.getItem('userId');
        // Create a copy of arr
        var newSubArr = JSON.parse(sessionStorage.getItem('subscriptions')).splice(0);
        newSubArr.push(this.username);
        this.userService.modifyUser(userId, newSubArr)
            .subscribe(function () {
            _this.toastr.info("Subscribed to " + _this.username);
            sessionStorage.setItem('subscriptions', JSON.stringify(newSubArr));
            _this.isFollowed = JSON.parse(sessionStorage.getItem('subscriptions')).includes(_this.username);
        });
    };
    ForeignFeedComponent.prototype.unfollowUser = function () {
        var _this = this;
        var userId = sessionStorage.getItem('userId');
        var newSubArr = JSON.parse(sessionStorage.getItem('subscriptions')).splice(0);
        var indexOfEl = newSubArr.indexOf(this.username);
        newSubArr.splice(indexOfEl, 1);
        this.userService.modifyUser(userId, newSubArr)
            .subscribe(function () {
            _this.toastr.info("Unsubscribed to " + _this.username);
            sessionStorage.setItem('subscriptions', JSON.stringify(newSubArr));
            _this.isFollowed = JSON.parse(sessionStorage.getItem('subscriptions')).includes(_this.username);
        });
    };
    ForeignFeedComponent.prototype.deleteChirp = function (id) {
        var _this = this;
        this.chirpService.deleteChirp(id)
            .subscribe(function () {
            _this.toastr.info("Chirp deleted.");
            //this.loadData()
        });
    };
    ForeignFeedComponent.prototype.dateConvertor = function (dateIsoFormat) {
        // @ts-ignore
        var diff = new Date() - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1)
            return 'less than a minute';
        if (diff < 60)
            return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24)
            return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30)
            return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12)
            return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);
        function pluralize(value) {
            if (value !== 1)
                return 's';
            else
                return '';
        }
    };
    ForeignFeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foreign-feed',
            template: __webpack_require__(/*! ./foreign-feed.component.html */ "./src/app/foreign-feed/foreign-feed.component.html"),
            styles: [__webpack_require__(/*! ./foreign-feed.component.css */ "./src/app/foreign-feed/foreign-feed.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _services_chirp_service__WEBPACK_IMPORTED_MODULE_1__["ChirpService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ForeignFeedComponent);
    return ForeignFeedComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div id=\"chirps\" class=\"chirps\">\n    <h2 class=\"titlebar\">Chirps from all followed users</h2>\n    <article class=\"chirp\" *ngFor=\"let c of chirps\">\n      <div class=\"titlebar\">\n        <a routerLink=\"{{c.author}}\" class=\"chirp-author\">{{c.author}}</a>\n        <span class=\"chirp-time\">\n          <a routerLink=\"/editChirp/{{c._id}}\" *ngIf=\"authService.isAdmin()\">edit </a>\n          <a class=\"pseudolink\" (click)=\"deleteChirp(c._id)\" *ngIf=\"authService.isAdmin()\">delete </a> {{c.time}}\n        </span>\n      </div>\n      <p>{{c.text}}</p>\n    </article>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chirp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chirp.service */ "./src/app/services/chirp.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, chirpService, userService, toastr) {
        this.authService = authService;
        this.chirpService = chirpService;
        this.userService = userService;
        this.toastr = toastr;
        this.username = sessionStorage.getItem('username');
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    HomeComponent.prototype.loadData = function () {
        var _this = this;
        var allFollowedChirps = [];
        var users = JSON.parse(sessionStorage.getItem('subscriptions'));
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            allFollowedChirps.push(this.chirpService.loadAllChirpsByUsername(user));
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(allFollowedChirps)
            .subscribe(function (arr) {
            if (arr.length > 0) {
                var allChirpsInOneArray = arr.reduce(function (result, current) {
                    return result.concat(current);
                });
                allChirpsInOneArray.forEach(function (c) {
                    c.time = _this.dateConvertor(c._kmd.ect);
                });
                _this.chirps = allChirpsInOneArray;
            }
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([
            this.chirpService.loadAllChirpsByUsername(this.username),
            this.userService.loadUserFollowers(this.username)
        ]).subscribe(function (_a) {
            var chirpsByUser = _a[0], followersArr = _a[1];
            _this.chirpsCount = chirpsByUser.length;
            _this.following = JSON.parse(sessionStorage.getItem('subscriptions')).length;
            _this.followers = followersArr.length;
        });
    };
    HomeComponent.prototype.deleteChirp = function (id) {
        var _this = this;
        this.chirpService.deleteChirp(id)
            .subscribe(function () {
            _this.toastr.info("Chirp deleted.");
            _this.loadData();
        });
    };
    HomeComponent.prototype.dateConvertor = function (dateIsoFormat) {
        // @ts-ignore
        var diff = new Date() - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1)
            return 'less than a minute';
        if (diff < 60)
            return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24)
            return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30)
            return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12)
            return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);
        function pluralize(value) {
            if (value !== 1)
                return 's';
            else
                return '';
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_chirp_service__WEBPACK_IMPORTED_MODULE_1__["ChirpService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/edit-chirp.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/edit-chirp.model.ts ***!
  \********************************************/
/*! exports provided: EditChirpModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditChirpModel", function() { return EditChirpModel; });
var EditChirpModel = /** @class */ (function () {
    function EditChirpModel(_id, text, author) {
        this._id = _id;
        this.text = text;
        this.author = author;
    }
    return EditChirpModel;
}());



/***/ }),

/***/ "./src/app/models/submit-chirp.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/submit-chirp.model.ts ***!
  \**********************************************/
/*! exports provided: SubmitChirpModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitChirpModel", function() { return SubmitChirpModel; });
var SubmitChirpModel = /** @class */ (function () {
    function SubmitChirpModel(text) {
        this.text = text;
    }
    return SubmitChirpModel;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\" *ngIf=\"authService.isAuthenticated()\">\n  <a routerLink=\"/feed\">Home</a>\n  <a routerLink=\"/discover\">Discover</a>\n  <a routerLink=\"/profile\">Me</a>\n  <a routerLink=\"/logout\">Logout</a>\n</div>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-found {\r\n  margin: 20px auto;\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: gray;\r\n}\r\n\r\np:nth-child(1) {\r\n  font-size: 100px;\r\n}\r\n\r\np:nth-child(2) {\r\n  font-size: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"not-found\">\r\n  <p>Error 404</p>\r\n  <p>Woops. Looks like this page does not exist!</p>\r\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ADMIN_ROLE_ID = '5275abc5-fdbb-455e-ac27-a4b3e53a8ce1';
var appKey = "kid_S1MVEYqMQ"; // APP KEY HERE;
var appSecret = "8546d0afc25c48a19153f0ae2c6374f7"; // APP SECRET HERE;
var registerUrl = "https://baas.kinvey.com/user/" + appKey;
var loginUrl = "https://baas.kinvey.com/user/" + appKey + "/login";
var logoutUrl = "https://baas.kinvey.com/user/" + appKey + "/_logout";
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (model) {
        return this.http.post(loginUrl, JSON.stringify(model), {
            headers: this.createAuthHeaders('Basic')
        });
    };
    AuthService.prototype.register = function (model) {
        return this.http.post(registerUrl, JSON.stringify(model), {
            headers: this.createAuthHeaders('Basic')
        });
    };
    AuthService.prototype.logout = function () {
        return this.http.post(logoutUrl, {}, {
            headers: this.createAuthHeaders('Kinvey')
        });
    };
    Object.defineProperty(AuthService.prototype, "authtoken", {
        get: function () {
            return this.currentAuthtoken;
        },
        set: function (value) {
            this.currentAuthtoken = value;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.isAuthenticated = function () {
        //return this.currentAuthtoken === sessionStorage.getItem('authtoken');
        return sessionStorage.getItem('authtoken') !== null;
    };
    AuthService.prototype.isAdmin = function () {
        return sessionStorage.getItem('roleId') !== null;
    };
    AuthService.prototype.saveSession = function (userInfo) {
        var userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', userAuth);
        var username = userInfo.username;
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('subscriptions', JSON.stringify(userInfo.subscriptions));
        if (userInfo._kmd.roles) {
            for (var _i = 0, _a = userInfo._kmd.roles; _i < _a.length; _i++) {
                var userRole = _a[_i];
                if (userRole.roleId === ADMIN_ROLE_ID) {
                    sessionStorage.setItem('roleId', ADMIN_ROLE_ID);
                }
            }
        }
    };
    AuthService.prototype.createAuthHeaders = function (type) {
        if (type === "Basic") {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': "Basic " + btoa(appKey + ":" + appSecret),
                'Content-Type': 'application/json'
            });
        }
        else {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': "Kinvey " + sessionStorage.getItem('authtoken'),
                'Content-Type': 'application/json'
            });
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/chirp.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/chirp.service.ts ***!
  \*******************************************/
/*! exports provided: ChirpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChirpService", function() { return ChirpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var appKey = "kid_S1MVEYqMQ";
var appSecret = "8546d0afc25c48a19153f0ae2c6374f7";
var masterSecret = "ea1698304ab4454ea94217e7c7523d6e";
var baseUrl = "https://baas.kinvey.com/appdata/" + appKey + "/";
var ChirpService = /** @class */ (function () {
    function ChirpService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ChirpService.prototype.loadFollowersChirps = function (subs) {
        var endpoint = "chirps?query={\"author\":{\"$in\": [" + subs + "]}}&sort={\"_kmd.ect\": -1}";
        return this.http.get(baseUrl + endpoint, { headers: this.createAuthHeaders("Kinvey") });
    };
    ChirpService.prototype.loadAllChirpsByUsername = function (username) {
        var endpoint = "chirps?query={\"author\":\"" + username + "\"}&sort={\"_kmd.ect\": -1}";
        return this.http.get(baseUrl + endpoint, { headers: this.createAuthHeaders("Kinvey") });
    };
    ChirpService.prototype.loadChirpById = function (chirpId) {
        var endpoint = "chirps?query={\"_id\":\"" + chirpId + "\"}";
        return this.http.get(baseUrl + endpoint, { headers: this.createAuthHeaders("Kinvey") });
    };
    ChirpService.prototype.loadAllChirps = function () {
        var endpoint = "chirps?query={}&sort={\"_kmd.ect\": -1}";
        return this.http.get(baseUrl + endpoint, { headers: this.createAuthHeaders("Master") });
    };
    ChirpService.prototype.createChirp = function (text, author) {
        var chirpData = {
            text: text,
            author: author
        };
        return this.http.post(baseUrl + 'chirps', JSON.stringify(chirpData), { headers: this.createAuthHeaders("Kinvey") });
    };
    ChirpService.prototype.deleteChirp = function (chirpId) {
        console.log(this.createAuthHeaders("Master"));
        return this.http.delete(baseUrl + ("chirps/" + chirpId), { headers: this.createAuthHeaders(this.authService.isAdmin() ? "Master" : "Kinvey") });
    };
    ChirpService.prototype.editChirp = function (chirpId, author, text) {
        var newData = {
            author: author,
            text: text
        };
        return this.http.put(baseUrl + ("chirps/" + chirpId), JSON.stringify(newData), { headers: this.createAuthHeaders(this.authService.isAdmin() ? "Master" : "Kinvey") });
    };
    ChirpService.prototype.createAuthHeaders = function (type) {
        if (type === "Basic") {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': "Basic " + btoa(appKey + ":" + appSecret),
                'Content-Type': 'application/json'
            });
        }
        else if (type === "Kinvey") {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': "Kinvey " + sessionStorage.getItem('authtoken'),
                'Content-Type': 'application/json'
            });
        }
        else if (type === "Master") {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': "Basic " + btoa(appKey + ":" + masterSecret),
                'Content-Type': 'application/json'
            });
        }
    };
    ChirpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ChirpService);
    return ChirpService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var appKey = "kid_S1MVEYqMQ";
var appSecret = "8546d0afc25c48a19153f0ae2c6374f7";
var masterSecret = "ea1698304ab4454ea94217e7c7523d6e";
var baseUrl = "https://baas.kinvey.com/user/" + appKey + "/";
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.loadUserByUsername = function (username) {
        var endpoint = "?query={\"username\":\"" + username + "\"}";
        return this.http.get(baseUrl + endpoint, { headers: this.createAuthHeaders("Kinvey") });
    };
    UserService.prototype.loadUserFollowers = function (username) {
        var endpoint = "?query={\"subscriptions\":\"" + username + "\"}";
        return this.http.get(baseUrl + endpoint, { headers: this.createAuthHeaders("Kinvey") });
    };
    UserService.prototype.loadAllUsers = function () {
        return this.http.get(baseUrl, { headers: this.createAuthHeaders("Kinvey") });
    };
    UserService.prototype.modifyUser = function (userId, newSubs) {
        var newUser = {
            subscriptions: newSubs
        };
        //return requester.update('user', userId, 'kinvey', newUser)
        return this.http.put(baseUrl + userId, JSON.stringify(newUser), { headers: this.createAuthHeaders("Kinvey") });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(baseUrl + (userId + "?hard=true"), { headers: this.createAuthHeaders("Master") });
    };
    UserService.prototype.createAuthHeaders = function (type) {
        if (type === "Basic") {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': "Basic " + btoa(appKey + ":" + appSecret),
                'Content-Type': 'application/json'
            });
        }
        else if (type === "Kinvey") {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': "Kinvey " + sessionStorage.getItem('authtoken'),
                'Content-Type': 'application/json'
            });
        }
        else if (type === "Master") {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': "Basic " + btoa(appKey + ":" + masterSecret),
                'Content-Type': 'application/json'
            });
        }
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user-feed/user-feed.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-feed/user-feed.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-feed/user-feed.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-feed/user-feed.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"chirper\">\n\n    <h2 class=\"titlebar\">{{username}}</h2>\n\n    <form id=\"formSubmitChirp\" class=\"chirp-form\" #formSubmitChirp=\"ngForm\" (ngSubmit)=\"submitChirp()\">\n      <textarea name=\"text\" class=\"chirp-input\" required minlength=\"5\" maxlength=\"150\" [(ngModel)]=\"model.text\" #text=\"ngModel\"></textarea>\n      <input class=\"chirp-submit\" id=\"btnSubmitChirp\" [disabled]=\"formSubmitChirp.form.invalid\" value=\"Publish\" type=\"submit\">\n    </form>\n\n    <div style=\"color:red\" *ngIf=\"model.text?.length == 150\">\n      Chirp text cannot be longer than 150 characters!\n    </div>\n\n    <div style=\"color:red\" *ngIf=\"model.text?.length < 5\">\n      Chirp text must be at least 5 symbols long!\n    </div>\n\n    <div id=\"myStats\" class=\"user-details\">\n      <span>{{chirpsCount}} chirps</span> |\n      <span>{{following}} following</span> |\n      <span>{{followers}} followers</span>\n    </div>\n  </div>\n  <div id=\"chirps\" class=\"chirps\">\n    <h2 class=\"titlebar\">My Chirps</h2>\n    <article class=\"chirp\" *ngFor=\"let c of chirps\">\n      <div class=\"titlebar\">\n        <a routerLink=\"/feed/{{username}}\" class=\"chirp-author\">{{c.author}}</a>\n        <span class=\"chirp-time\">\n          <a routerLink=\"/editChirp/{{c._id}}\">edit </a>\n          <a class=\"pseudolink\" (click)=\"deleteChirp(c._id)\">delete </a> {{c.time}}\n        </span>\n      </div>\n      <p>{{c.text}}</p>\n    </article>\n    <div class=\"chirp\" *ngIf=\"!chirps?.length\">\n      <span class=\"loading\">No chirps in database</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-feed/user-feed.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-feed/user-feed.component.ts ***!
  \**************************************************/
/*! exports provided: UserFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFeedComponent", function() { return UserFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chirp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chirp.service */ "./src/app/services/chirp.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_submit_chirp_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/submit-chirp.model */ "./src/app/models/submit-chirp.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserFeedComponent = /** @class */ (function () {
    function UserFeedComponent(chirpService, userService, toastr) {
        this.chirpService = chirpService;
        this.userService = userService;
        this.toastr = toastr;
        this.model = new _models_submit_chirp_model__WEBPACK_IMPORTED_MODULE_5__["SubmitChirpModel"]('');
        this.username = sessionStorage.getItem('username');
    }
    UserFeedComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    UserFeedComponent.prototype.submitChirp = function () {
        var _this = this;
        this.chirpService.createChirp(this.model.text, this.username)
            .subscribe(function () {
            _this.toastr.info("Chirp published.");
            _this.loadData();
        });
    };
    UserFeedComponent.prototype.deleteChirp = function (id) {
        var _this = this;
        this.chirpService.deleteChirp(id)
            .subscribe(function () {
            _this.toastr.info("Chirp deleted.");
            _this.loadData();
        });
    };
    UserFeedComponent.prototype.loadData = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
            this.chirpService.loadAllChirpsByUsername(this.username),
            this.userService.loadUserFollowers(this.username),
            this.userService.loadUserByUsername(this.username)
        ]).subscribe(function (_a) {
            var chirpsArr = _a[0], followersArr = _a[1], user = _a[2];
            _this.chirpsCount = chirpsArr.length;
            _this.following = user[0].subscriptions.length;
            _this.followers = followersArr.length;
            chirpsArr.forEach(function (c) {
                c.time = _this.dateConvertor(c._kmd.ect);
                c.isAuthor = c.author === sessionStorage.getItem('username');
            });
            _this.chirps = chirpsArr;
        });
    };
    UserFeedComponent.prototype.dateConvertor = function (dateIsoFormat) {
        // @ts-ignore
        var diff = new Date() - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1)
            return 'less than a minute';
        if (diff < 60)
            return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24)
            return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30)
            return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12)
            return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);
        function pluralize(value) {
            if (value !== 1)
                return 's';
            else
                return '';
        }
    };
    UserFeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-feed',
            template: __webpack_require__(/*! ./user-feed.component.html */ "./src/app/user-feed/user-feed.component.html"),
            styles: [__webpack_require__(/*! ./user-feed.component.css */ "./src/app/user-feed/user-feed.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chirp_service__WEBPACK_IMPORTED_MODULE_1__["ChirpService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], UserFeedComponent);
    return UserFeedComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\SoftUni\JS Web\Angular\AngularProject-Chirper\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map