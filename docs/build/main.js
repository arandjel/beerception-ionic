webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_config__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_cookie_service__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UploadFileProvider = (function () {
    function UploadFileProvider(config, http, cookieService) {
        this.config = config;
        this.http = http;
        this.cookieService = cookieService;
    }
    UploadFileProvider.prototype.addBeerception = function (file) {
        var formdata = new FormData();
        formdata.append('beerFile', file);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
            'Accept': 'application/json',
            'X-XSRF-TOKEN': this.getXsrfToken()
        });
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpRequest */]('POST', this.config.beerception_url, formdata, {
            headers: headers,
            withCredentials: true,
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req)
            .catch(function (error) {
            if (error && error.status === 401) {
                // this.redirectIfUnauth(error);
            }
            else {
                // this.displayError(error);
            }
            throw error;
        });
    };
    UploadFileProvider.prototype.getBeerception = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
            'Accept': 'image/jpeg',
            'Content-Type': 'image/jpeg'
        });
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpRequest */]('GET', this.config.beerception_url, {}, {
            headers: headers,
            withCredentials: true,
            responseType: 'text'
        });
        return this.http.request(req)
            .filter(function (response) { return response instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["g" /* HttpResponse */]; })
            .map(function (response) { return response.body; })
            .catch(function (error) {
            if (error && error.status === 401) {
                // this.redirectIfUnauth(error);
            }
            else {
                // this.displayError(error);
            }
            throw error;
        });
    };
    UploadFileProvider.prototype.getXsrfToken = function () {
        return this.cookieService.get("XSRF-TOKEN");
    };
    UploadFileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_cookie_service__["a" /* CookieService */]])
    ], UploadFileProvider);
    return UploadFileProvider;
}());

//# sourceMappingURL=upload-file.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerProvider = (function () {
    function BeerProvider(apiService, config) {
        this.apiService = apiService;
        this.config = config;
    }
    BeerProvider.prototype.getBeerceptionInfo = function () {
        console.log("getting beerception info: " + this.config.beerception_info_url);
        return this.apiService.get(this.config.beerception_info_url);
    };
    BeerProvider.prototype.beerUp = function (body) {
        return this.apiService.post(this.config.beerception_url + '/beerup', {});
    };
    BeerProvider.prototype.beerDown = function (body) {
        return this.apiService.post(this.config.beerception_url + '/beerdown', {});
    };
    BeerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* ConfigProvider */]])
    ], BeerProvider);
    return BeerProvider;
}());

//# sourceMappingURL=beer.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RulesModalPage = (function () {
    function RulesModalPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rules = [
            'Same user cannot take two photos in the row.',
            'Only the latest photo can be beerup-ed or beerdown-ed.',
            'If photo has -10 score, photo gets deleted from server. Previous photo takes it place.',
            'It is up to users to keep up the good beerception practice.'
        ];
    }
    RulesModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RulesModalPage');
    };
    RulesModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    RulesModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rules-modal',template:/*ion-inline-start:"C:\Users\Milos\git\beerception-ionic\src\pages\rules-modal\rules-modal.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Beerception Rules</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button color="danger" icon-only (click)="closeModal()">\n\n        <ion-icon name="md-close-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-sm>\n\n        <ion-list>\n\n          <ion-list-header>\n\n              Rules\n\n          </ion-list-header>\n\n\n\n          <ion-item *ngFor="let rule of rules" text-wrap>\n\n            <button ion-button icon-only>\n\n              <ion-icon name="md-star"></ion-icon>\n\n            </button>\n\n            {{ rule }}\n\n          </ion-item>\n\n        \n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Milos\git\beerception-ionic\src\pages\rules-modal\rules-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RulesModalPage);
    return RulesModalPage;
}());

//# sourceMappingURL=rules-modal.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBeerceptionModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_upload_file_upload_file__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddBeerceptionModalPage = (function () {
    function AddBeerceptionModalPage(viewCtrl, navCtrl, navParams, toastCtrl, camera, uploadFileProvider, platform) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.uploadFileProvider = uploadFileProvider;
        this.platform = platform;
        this.rules = [
            'Same user cannot take two photos in the row.',
            'Only the latest photo can be beerup-ed or beerdown-ed.',
            'If photo has -10 score, photo gets deleted from server. Previous photo takes it place.',
            'It is up to users to keep up the good beerception practice.'
        ];
        this.progress = { percentage: 0 };
    }
    AddBeerceptionModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddBeerceptionModalPage');
    };
    AddBeerceptionModalPage.prototype.selectFile = function (event) {
        var file = event.target.files.item(0);
        if (!file)
            return;
        if (file.type.match('image.*')) {
            this.selectedFiles = event.target.files;
        }
        else {
            this.presentToast('Invalid image format!');
        }
    };
    AddBeerceptionModalPage.prototype.upload = function () {
        var _this = this;
        this.progress.percentage = 0;
        this.currentFileUpload = this.selectedFiles.item(0);
        this.uploadFileProvider.addBeerception(this.currentFileUpload)
            .subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                _this.progress.percentage = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["g" /* HttpResponse */]) {
                console.log('File is completely uploaded!');
                _this.presentToast("Photo has been uploaded with success!");
                _this.closeModal();
            }
        }, function (error) {
            var errorJson = JSON.parse(error['error']);
            _this.errorMessage = errorJson['errorMessage'];
            _this.presentToast(_this.errorMessage);
        });
        this.selectedFiles = undefined;
    };
    AddBeerceptionModalPage.prototype.takePicture = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    AddBeerceptionModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    AddBeerceptionModalPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 10000,
            position: 'top',
            showCloseButton: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AddBeerceptionModalPage.prototype.isBrowserDevice = function () {
        return this.platform.is('core') || this.platform.is('mobileweb');
    };
    AddBeerceptionModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-beerception-modal',template:/*ion-inline-start:"C:\Users\Milos\git\beerception-ionic\src\pages\add-beerception-modal\add-beerception-modal.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Add Beerception</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button color="danger" icon-only (click)="closeModal()">\n\n        <ion-icon name="md-close-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <div *ngIf="currentFileUpload" class="progress">\n\n          <progress-bar [progress]="progress.percentage"></progress-bar>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <h5 class="choose-title">Choose a Beerception photo</h5>\n\n        <ion-buttons>\n\n          <button ion-button color="secondary" [disabled]="!selectedFiles" (click)="upload()">Upload</button>\n\n          <input (change)="selectFile($event)" type="file" class="custom-file-input" id="select-file">\n\n        </ion-buttons>\n\n        <button *ngIf="!isBrowserDevice()" ion-button color="secondary" (click)="takePicture()">Take a Picture</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 col-sm>\n\n        <ion-list>\n\n          <ion-list-header>\n\n              Rules\n\n          </ion-list-header>\n\n\n\n          <ion-item *ngFor="let rule of rules" text-wrap>\n\n            <button ion-button icon-only>\n\n              <ion-icon name="md-star"></ion-icon>\n\n            </button>\n\n            {{ rule }}\n\n          </ion-item>\n\n        \n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Milos\git\beerception-ionic\src\pages\add-beerception-modal\add-beerception-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__providers_upload_file_upload_file__["a" /* UploadFileProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], AddBeerceptionModalPage);
    return AddBeerceptionModalPage;
}());

//# sourceMappingURL=add-beerception-modal.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, userProvider, authProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.title = 'Sign up';
        /**
         * Boolean used in telling the UI
         * that the form has been submitted
         * and is awaiting a response
         */
        this.submitted = false;
        this.invalidData = false;
        this.formGroup = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(5)])],
            firstname: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])]
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.ionViewCanEnter = function () {
        return !this.userProvider.isLoggedIn();
    };
    SignupPage.prototype.toLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.onSubmit = function () {
        var _this = this;
        this.invalidData = false;
        /**
         * Deny submit if validation errors exist
         */
        if (!this.validate())
            return;
        /**
         * Innocent until proven guilty
         */
        this.notification = undefined;
        this.submitted = true;
        this.authProvider.signup(this.formGroup.value)
            .delay(1000)
            .subscribe(function (data) {
            console.log(data);
            _this.authProvider.login(_this.formGroup.value).subscribe(function (loginData) {
                _this.userProvider.getMyInfo().subscribe();
            });
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            _this.navCtrl.popToRoot();
        }, function (error) {
            console.log("error with signup: " + error);
            _this.submitted = false;
            _this.invalidData = true;
            _this.notification = { msgType: 'error', msgBody: error['error'].errorMessage };
        });
    };
    SignupPage.prototype.validate = function () {
        if (this.formGroup.get('username').touched && this.formGroup.get('username').invalid)
            return false;
        if (this.formGroup.get('password').touched && this.formGroup.get('password').invalid)
            return false;
        if (this.formGroup.get('firstname').touched && this.formGroup.get('firstname').invalid)
            return false;
        if (this.formGroup.get('lastname').touched && this.formGroup.get('lastname').invalid)
            return false;
        return true;
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Milos\git\beerception-ionic\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Sign up</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12 col-sm>\n\n          <ion-item *ngIf="invalidData && notification" class="alert alert-danger">\n\n            {{notification.msgBody}}\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12 col-sm>\n\n          <form [formGroup]="formGroup">\n\n            <ion-item>\n\n              <ion-label floating>Email address</ion-label>\n\n              <ion-input formControlName="username" name="username" type="email"></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="!formValid && formGroup.get(\'username\').invalid">\n\n                <p>Email is required. Please provide valid email.</p>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>Password</ion-label>\n\n              <ion-input formControlName="password" name="password" type="password"></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="!formValid && formGroup.get(\'password\').invalid">\n\n                <p>Password is required.</p>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>First Name</ion-label>\n\n              <ion-input formControlName="firstname" name="firstname" type="text"></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="!formValid && formGroup.get(\'firstname\').invalid">\n\n                <p>First name is required.</p>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>Last Name</ion-label>\n\n              <ion-input formControlName="lastname" name="lastname" type="text"></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="!formValid && formGroup.get(\'lastname\').invalid">\n\n                <p>Last name is required.</p>\n\n            </ion-item>\n\n            <ion-row>\n\n              <ion-col>\n\n                <button ion-button block (click)="onSubmit()">Sign up</button>\n\n                <img *ngIf="submitted" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />\n\n              </ion-col>\n\n              <ion-col>\n\n                  <button ion-button block (click)="toLogin()">Login</button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </form>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Milos\git\beerception-ionic\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initUserFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_beer_beer__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_config_config__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_api_api__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_user_user__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_rules_modal_rules_modal__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_upload_file_upload_file__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_add_beerception_modal_add_beerception_modal__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_progress_bar_progress_bar__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















function initUserFactory(userProvider) {
    console.log("initUserFactory");
    return function () { return userProvider.initUser(); };
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_rules_modal_rules_modal__["a" /* RulesModalPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_add_beerception_modal_add_beerception_modal__["a" /* AddBeerceptionModalPage */],
                __WEBPACK_IMPORTED_MODULE_21__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_rules_modal_rules_modal__["a" /* RulesModalPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_add_beerception_modal_add_beerception_modal__["a" /* AddBeerceptionModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_beer_beer__["a" /* BeerProvider */],
                {
                    'provide': __WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* APP_INITIALIZER */],
                    'useFactory': initUserFactory,
                    'deps': [__WEBPACK_IMPORTED_MODULE_13__providers_user_user__["a" /* UserProvider */]],
                    'multi': true
                },
                __WEBPACK_IMPORTED_MODULE_16__providers_upload_file_upload_file__["a" /* UploadFileProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, authProvider, userProvider) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.authProvider = authProvider;
        this.userProvider = userProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.loginPage = { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] };
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Beerception', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.authProvider.logout().subscribe(function (res) {
            _this.userProvider.getMyInfo().subscribe();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
            _this.nav.popToRoot();
        });
    };
    MyApp.prototype.isLoggedIn = function () {
        return this.userProvider.isLoggedIn();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Milos\git\beerception-ionic\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n      <button *ngIf="!isLoggedIn()" menuClose ion-item (click)="openPage(loginPage)">\n\n        {{loginPage.title}}\n\n      </button>\n\n      <button *ngIf="isLoggedIn()" menuClose ion-item (click)="logout()">\n\n        Logout\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Milos\git\beerception-ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* UserProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = serialize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loose_invalid__ = __webpack_require__(298);


function serialize(obj) {
    var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]();
    for (var key in obj) {
        if (obj.hasOwnProperty(key) && !Object(__WEBPACK_IMPORTED_MODULE_1__loose_invalid__["a" /* looseInvalid */])(obj[key])) {
            params = params.set(key, obj[key]);
        }
    }
    return params;
}
//# sourceMappingURL=serialize.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = looseInvalid;
function looseInvalid(a) {
    return a === '' || a === null || a === undefined;
}
//# sourceMappingURL=loose-invalid.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('progress'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"C:\Users\Milos\git\beerception-ionic\src\components\progress-bar\progress-bar.html"*/'<div class="progress-outer">\n\n    <div class="progress-inner" [style.width]="progress + \'%\'">\n\n        {{progress}}%\n\n    </div>\n\n</div>'/*ion-inline-end:"C:\Users\Milos\git\beerception-ionic\src\components\progress-bar\progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProvider = (function () {
    function UserProvider(apiService, config) {
        this.apiService = apiService;
        this.config = config;
    }
    UserProvider.prototype.initUser = function () {
        var _this = this;
        var promise = this.apiService.get(this.config.refresh_token_url).toPromise()
            .then(function (res) {
            if (res.access_token !== null) {
                return _this.getMyInfo().toPromise()
                    .then(function (user) {
                    _this.currentUser = user;
                });
            }
        })
            .catch(function () { return null; });
        return promise;
    };
    UserProvider.prototype.resetCredentials = function () {
        return this.apiService.get(this.config.reset_credentials_url);
    };
    UserProvider.prototype.getMyInfo = function () {
        var _this = this;
        return this.apiService.get(this.config.whoami_url).map(function (user) { return _this.currentUser = user; });
    };
    UserProvider.prototype.getAll = function () {
        return this.apiService.get(this.config.users_url);
    };
    UserProvider.prototype.isLoggedIn = function () {
        if (this.currentUser) {
            return true;
        }
        else {
            return false;
        }
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* ConfigProvider */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConfigProvider = (function () {
    function ConfigProvider() {
        //private _host_url = 'http://localhost:8080';
        //private _host_url = 'http://192.168.0.16:8080';
        this._host_url = 'https://beerception.herokuapp.com';
        this._api_url = this._host_url + '/api/v1';
        this._refresh_token_url = this._api_url + '/auth/refresh';
        this._login_url = this._api_url + '/auth/login';
        this._logout_url = this._api_url + '/auth/logout';
        this._signup_url = this._api_url + '/auth/signup';
        this._change_password_url = this._api_url + '/auth/changePassword';
        this._whoami_url = this._api_url + '/auth/whoami';
        this._user_url = this._api_url + '/auth/user';
        this._reset_credentials_url = this._user_url + '/reset-credentials';
        this._users_url = this._user_url + '/auth/all';
        this._beerception_url = this._api_url + '/beerception';
        this._beerception_info_url = this._beerception_url + '/info';
    }
    Object.defineProperty(ConfigProvider.prototype, "reset_credentials_url", {
        get: function () {
            return this._reset_credentials_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigProvider.prototype, "refresh_token_url", {
        get: function () {
            return this._refresh_token_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigProvider.prototype, "whoami_url", {
        get: function () {
            return this._whoami_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigProvider.prototype, "users_url", {
        get: function () {
            return this._users_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigProvider.prototype, "login_url", {
        get: function () {
            return this._login_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigProvider.prototype, "logout_url", {
        get: function () {
            return this._logout_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigProvider.prototype, "change_password_url", {
        get: function () {
            return this._change_password_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigProvider.prototype, "signup_url", {
        get: function () {
            return this._signup_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigProvider.prototype, "beerception_url", {
        get: function () {
            return this._beerception_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigProvider.prototype, "beerception_info_url", {
        get: function () {
            return this._beerception_info_url;
        },
        enumerable: true,
        configurable: true
    });
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_beer_beer__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rules_modal_rules_modal__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_upload_file_upload_file__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_beerception_modal_add_beerception_modal__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, alertCtrl, fileProvider, beerProvider, userProvider) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.fileProvider = fileProvider;
        this.beerProvider = beerProvider;
        this.userProvider = userProvider;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddBeerceptionModalPage');
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.getBeerception();
        this.getBeerceptionInfo();
    };
    HomePage.prototype.getBeerception = function () {
        var _this = this;
        console.log("getting beerception");
        this.fileProvider.getBeerception().subscribe(function (data) {
            _this.imageData = 'data:image/png;base64,' + data;
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.getBeerceptionInfo = function () {
        var _this = this;
        console.log("getting beerception info");
        this.beerProvider.getBeerceptionInfo().subscribe(function (res) {
            console.log(res);
            _this.beerFileInfo = res;
            if (res['beerDate'])
                _this.beerFileInfo.beerDate = new Date(res['beerDate']);
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.beerUp = function () {
        var _this = this;
        if (!this.isLoggedIn())
            return;
        this.beerProvider.beerUp({}).subscribe(function (res) {
            console.log(res);
            _this.beerFileInfo = res;
            if (res['beerDate'])
                _this.beerFileInfo.beerDate = new Date(res['beerDate']);
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.beerDown = function () {
        var _this = this;
        if (!this.isLoggedIn())
            return;
        this.beerProvider.beerDown({}).subscribe(function (res) {
            console.log(res);
            _this.beerFileInfo = res;
            if (res['beerDate'])
                _this.beerFileInfo.beerDate = new Date(res['beerDate']);
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.openRulesModal = function () {
        var rulesModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__rules_modal_rules_modal__["a" /* RulesModalPage */]);
        rulesModal.present();
    };
    HomePage.prototype.openAddBeerceptionModal = function () {
        var _this = this;
        if (!this.isLoggedIn())
            return;
        var rulesModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__add_beerception_modal_add_beerception_modal__["a" /* AddBeerceptionModalPage */]);
        rulesModal.present();
        rulesModal.onDidDismiss(function () {
            _this.getBeerception();
            _this.getBeerceptionInfo();
        });
    };
    HomePage.prototype.isLoggedIn = function () {
        var _this = this;
        if (this.userProvider.isLoggedIn()) {
            return true;
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Not logged in',
                subTitle: 'Please login in order to do this action.',
                buttons: [
                    'Dismiss',
                    {
                        text: 'Login',
                        role: 'login',
                        handler: function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                        }
                    }
                ]
            });
            alert_1.present();
            return false;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Milos\git\beerception-ionic\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Beerception</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button color="secondary" icon-only (click)="openAddBeerceptionModal()">\n\n        <ion-icon name="md-add-circle"></ion-icon>\n\n      </button>\n\n      <button ion-button color="primary" icon-only (click)="openRulesModal()">\n\n        <ion-icon name="md-help-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-sm>\n\n        <img *ngIf="imageData" src="{{ imageData }}" class="img-fluid ception-image" alt="Beerception">\n\n        <p *ngIf="!imageData" >Loading latest beerception...</p>\n\n        <img *ngIf="!imageData" src="assets/imgs/beerception.png" class="img-fluid ception-image" alt="Beerception">\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="beerFileInfo && imageData">\n\n      <ion-col col-6>\n\n        <button ion-button (click)="beerUp()" color="primary" round icon-start class="vote-button">\n\n          <ion-icon name="ios-beer"></ion-icon>\n\n          Beer Up! ({{ beerFileInfo.beerUp }})\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button (click)="beerDown()" color="danger" round icon-end class="vote-button">\n\n          Beer down! ({{ beerFileInfo.beerDown }})\n\n          <ion-icon name="ios-beer-outline"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Milos\git\beerception-ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_upload_file_upload_file__["a" /* UploadFileProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_beer_beer__["a" /* BeerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RequestMethod */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_utilities_serialize__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_cookie_service__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RequestMethod;
(function (RequestMethod) {
    RequestMethod["Get"] = "GET";
    RequestMethod["Head"] = "HEAD";
    RequestMethod["Post"] = "POST";
    RequestMethod["Put"] = "PUT";
    RequestMethod["Delete"] = "DELETE";
    RequestMethod["Options"] = "OPTIONS";
    RequestMethod["Patch"] = "PATCH";
})(RequestMethod || (RequestMethod = {}));
var ApiProvider = (function () {
    function ApiProvider(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
    }
    ApiProvider.prototype.get = function (path, args) {
        var options = {
            headers: this.headers,
            withCredentials: true
        };
        if (args) {
            options['params'] = Object(__WEBPACK_IMPORTED_MODULE_6__shared_utilities_serialize__["a" /* serialize */])(args);
        }
        return this.http.get(path, options)
            .catch(this.checkError.bind(this));
    };
    ApiProvider.prototype.post = function (path, body, customHeaders) {
        var _customHeaders;
        if (!customHeaders) {
            _customHeaders = this.headers.append('X-XSRF-TOKEN', this.getXsrfToken());
        }
        else if (customHeaders && !customHeaders.get('X-XSRF-TOKEN')) {
            _customHeaders = customHeaders.append('X-XSRF-TOKEN', this.getXsrfToken());
        }
        return this.request(path, body, RequestMethod.Post, _customHeaders);
    };
    ApiProvider.prototype.put = function (path, body) {
        var _customHeaders;
        _customHeaders = this.headers.append('X-XSRF-TOKEN', this.getXsrfToken());
        return this.request(path, body, RequestMethod.Put, _customHeaders);
    };
    ApiProvider.prototype.delete = function (path, body) {
        var _customHeaders;
        _customHeaders = this.headers.append('X-XSRF-TOKEN', this.getXsrfToken());
        return this.request(path, body, RequestMethod.Delete, _customHeaders);
    };
    ApiProvider.prototype.request = function (path, body, method, customHeaders) {
        var _this = this;
        if (method === void 0) { method = RequestMethod.Post; }
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpRequest */](method, path, body, {
            headers: customHeaders || this.headers,
            withCredentials: true
        });
        return this.http.request(req)
            .filter(function (response) { return response instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["g" /* HttpResponse */]; })
            .map(function (response) { return response.body; })
            .catch(function (error) { return _this.checkError(error); });
    };
    // Display error if logged in, otherwise redirect to IDP
    ApiProvider.prototype.checkError = function (error) {
        if (error && error.status === 401) {
            // this.redirectIfUnauth(error);
        }
        else {
            // this.displayError(error);
        }
        throw error;
    };
    ApiProvider.prototype.getXsrfToken = function () {
        // "XSRF-TOKEN"
        /*
        const token: string = this.xsrf.getToken();
    
        if (token)
          return this.xsrf.getToken();
    
        return null;
        */
        return this.cookieService.get("XSRF-TOKEN");
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_cookie_service__["a" /* CookieService */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, userProvider, authProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.title = 'Login';
        /**
         * Boolean used in telling the UI
         * that the form has been submitted
         * and is awaiting a response
         */
        this.submitted = false;
        this.invalidData = false;
        this.formValid = true;
        this.formGroup = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].nullValidator])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].nullValidator])]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.ionViewCanEnter = function () {
        return !this.userProvider.isLoggedIn();
    };
    LoginPage.prototype.toSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        this.invalidData = false;
        this.formValid = true;
        /**
         * Deny submit if username or password contain validation errors
         */
        if (!this.validate()) {
            this.formValid = false;
            return;
        }
        /**
         * Innocent until proven guilty
         */
        this.notification = undefined;
        this.submitted = true;
        this.authProvider.login(this.formGroup.value)
            .delay(1000)
            .subscribe(function (data) {
            console.log("logging in");
            _this.userProvider.getMyInfo().subscribe();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
            _this.navCtrl.popToRoot();
        }, function (error) {
            console.log("error with login: " + error);
            _this.submitted = false;
            _this.invalidData = true;
            _this.notification = { msgType: 'error', msgBody: error.error['message'] };
        });
    };
    LoginPage.prototype.validate = function () {
        if (this.formGroup.get('username').invalid)
            return false;
        if (this.formGroup.get('password').invalid)
            return false;
        return true;
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Milos\git\beerception-ionic\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-sm>\n\n        <ion-item *ngIf="invalidData && notification" class="alert alert-danger">\n\n          {{notification.msgBody}}\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 col-sm>\n\n        <form [formGroup]="formGroup">\n\n          <ion-item>\n\n            <ion-label floating>Email address</ion-label>\n\n            <ion-input formControlName="username" name="username" type="email"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="!formValid && formGroup.get(\'username\').invalid">\n\n              <p>Email is required. Please provide valid email.</p>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input formControlName="password" name="password" type="password"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="!formValid && formGroup.get(\'password\').invalid">\n\n              <p>Password is required.</p>\n\n          </ion-item>\n\n          <ion-row>\n\n            <ion-col>\n\n              <button ion-button block (click)="onSubmit()">Login</button>\n\n              <img *ngIf="submitted" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button block (click)="toSignup()">Sign up</button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Milos\git\beerception-ionic\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthProvider = (function () {
    function AuthProvider(apiService, userService, config) {
        this.apiService = apiService;
        this.userService = userService;
        this.config = config;
    }
    AuthProvider.prototype.login = function (user) {
        var _this = this;
        var loginHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var body = "email=" + user.username + "&password=" + user.password;
        return this.apiService.post(this.config.login_url, body, loginHeaders).map(function () {
            console.log("Login success");
            _this.userService.getMyInfo().subscribe();
        });
    };
    AuthProvider.prototype.signup = function (user) {
        var signupHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
        var body = {
            "email": user['username'],
            "password": user['password'],
            "name": user['firstname'],
            "lastName": user['lastname']
        };
        return this.apiService.post(this.config.signup_url, body, signupHeaders).map(function () {
            console.log("Sign up success");
        });
    };
    AuthProvider.prototype.logout = function () {
        var _this = this;
        var logoutHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
        return this.apiService.post(this.config.logout_url, {}, logoutHeaders)
            .map(function () {
            console.log("Logout success");
            _this.userService.currentUser = null;
        });
    };
    AuthProvider.prototype.changePassword = function (passwordChanger) {
        return this.apiService.post(this.config.change_password_url, passwordChanger);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* ConfigProvider */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map