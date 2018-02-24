webpackJsonp(["account.module"],{

/***/ "../../../../../src/app/@core/model/address.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
var Address = /** @class */ (function () {
    function Address(street, city, postalCode, country) {
        this.street = street;
        this.city = city;
        this.postalCode = postalCode;
        this.country = country;
    }
    return Address;
}());



/***/ }),

/***/ "../../../../../src/app/@core/model/country.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Country; });
var Country;
(function (Country) {
    Country["CH"] = "Switzerland";
    Country["DE"] = "Germany";
    Country["FR"] = "France";
    Country["GB"] = "England";
    Country["IT"] = "Italy";
    Country["US"] = "United States";
})(Country || (Country = {}));


/***/ }),

/***/ "../../../../../src/app/@core/model/creditcard-type.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditCardType; });
var CreditCardType;
(function (CreditCardType) {
    CreditCardType["MASTERCARD"] = "MASTERCARD";
    CreditCardType["VISA"] = "VISA";
})(CreditCardType || (CreditCardType = {}));


/***/ }),

/***/ "../../../../../src/app/@core/model/creditcard.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditCard; });
var CreditCard = /** @class */ (function () {
    function CreditCard(type, number, expirationMonth, expirationYear) {
        this.type = type;
        this.number = number;
        this.expirationMonth = expirationMonth;
        this.expirationYear = expirationYear;
    }
    return CreditCard;
}());



/***/ }),

/***/ "../../../../../src/app/pages/account/account-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_component__ = __webpack_require__("../../../../../src/app/pages/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/pages/account/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/pages/account/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logout_logout_component__ = __webpack_require__("../../../../../src/app/pages/account/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_services_logout_guard_service__ = __webpack_require__("../../../../../src/app/@core/services/logout-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_services_auth_guard_service__ = __webpack_require__("../../../../../src/app/@core/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__overview_overview_component__ = __webpack_require__("../../../../../src/app/pages/account/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edit_account_data_edit_account_data_component__ = __webpack_require__("../../../../../src/app/pages/account/edit-account-data/edit-account-data.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__account_component__["a" /* AccountComponent */],
        children: [
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
            }, {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */],
            }, {
                path: 'logout',
                component: __WEBPACK_IMPORTED_MODULE_5__logout_logout_component__["a" /* LogoutComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_6__core_services_logout_guard_service__["a" /* LogoutGuardService */]],
            }, {
                path: 'overview',
                component: __WEBPACK_IMPORTED_MODULE_8__overview_overview_component__["a" /* OverviewComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_7__core_services_auth_guard_service__["a" /* AuthGuardService */]],
            }, {
                path: 'edit',
                component: __WEBPACK_IMPORTED_MODULE_9__edit_account_data_edit_account_data_component__["a" /* EditAccountDataComponent */],
                canActivateChild: [__WEBPACK_IMPORTED_MODULE_7__core_services_auth_guard_service__["a" /* AuthGuardService */]],
            }, {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
            }
        ],
    }];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]],
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__account_component__["a" /* AccountComponent */],
    __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
    __WEBPACK_IMPORTED_MODULE_5__logout_logout_component__["a" /* LogoutComponent */],
    __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */],
];


/***/ }),

/***/ "../../../../../src/app/pages/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-layout>\r\n  <nb-layout-column>\r\n    <nb-card>\r\n      <nb-card-body>\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"flex-centered col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n            <router-outlet></router-outlet>\r\n          </div>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </nb-layout-column>\r\n</nb-layout>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-account',
            template: __webpack_require__("../../../../../src/app/pages/account/account.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/account/account.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/pages/account/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register_component__ = __webpack_require__("../../../../../src/app/pages/account/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_routing_module__ = __webpack_require__("../../../../../src/app/pages/account/account-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logout_logout_component__ = __webpack_require__("../../../../../src/app/pages/account/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__change_user_data_change_user_data_component__ = __webpack_require__("../../../../../src/app/pages/account/change-user-data/change-user-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__change_address_data_change_address_data_component__ = __webpack_require__("../../../../../src/app/pages/account/change-address-data/change-address-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__change_payment_data_change_payment_data_component__ = __webpack_require__("../../../../../src/app/pages/account/change-payment-data/change-payment-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__change_password_change_password_component__ = __webpack_require__("../../../../../src/app/pages/account/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__overview_overview_component__ = __webpack_require__("../../../../../src/app/pages/account/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__edit_account_data_edit_account_data_component__ = __webpack_require__("../../../../../src/app/pages/account/edit-account-data/edit-account-data.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__account_routing_module__["a" /* AccountRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__theme_theme_module__["a" /* ThemeModule */],
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_3__account_routing_module__["b" /* routedComponents */].concat([
                __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_2__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__change_user_data_change_user_data_component__["a" /* ChangeUserDataComponent */],
                __WEBPACK_IMPORTED_MODULE_8__change_address_data_change_address_data_component__["a" /* ChangeAddressDataComponent */],
                __WEBPACK_IMPORTED_MODULE_9__change_payment_data_change_payment_data_component__["a" /* ChangePaymentDataComponent */],
                __WEBPACK_IMPORTED_MODULE_10__change_password_change_password_component__["a" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_11__overview_overview_component__["a" /* OverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_12__edit_account_data_edit_account_data_component__["a" /* EditAccountDataComponent */],
            ]),
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__change_user_data_change_user_data_component__["a" /* ChangeUserDataComponent */],
                __WEBPACK_IMPORTED_MODULE_8__change_address_data_change_address_data_component__["a" /* ChangeAddressDataComponent */],
                __WEBPACK_IMPORTED_MODULE_9__change_payment_data_change_payment_data_component__["a" /* ChangePaymentDataComponent */],
                __WEBPACK_IMPORTED_MODULE_10__change_password_change_password_component__["a" /* ChangePasswordComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_2__register_register_component__["a" /* RegisterComponent */],
            ],
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/account/change-address-data/change-address-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div ngxProvideParentForm>\n  <div class=\"form-group\">\n    <label for=\"input-street\" class=\"sr-only\">Street</label>\n    <input name=\"street\" [(ngModel)]=\"customer.address.street\" id=\"input-street\" class=\"form-control\"\n           placeholder=\"Street\" #street=\"ngModel\"\n           [class.form-control-danger]=\"street.invalid && street.touched\"\n           ngModel\n           required minlength=\"2\" maxlength=\"70\">\n    <small class=\"form-text error\" *ngIf=\"street.invalid && street.touched && street.errors?.required\">Street is\n      required!\n    </small>\n    <small class=\"form-text error\"\n           *ngIf=\"street.invalid && street.touched && (street.errors?.minlength || street.errors?.maxlength)\">\n      Street should contain between 2 to 20 characters\n    </small>\n  </div>\n\n  <div class=\"row city-country\">\n    <div class=\"col-sm-3 form-group\">\n      <label for=\"input-postal-code\" class=\"sr-only\">PostalCode</label>\n      <input name=\"postalCode\" [(ngModel)]=\"customer.address.postalCode\" id=\"input-postal-code\" #postalCode=\"ngModel\"\n             class=\"form-control\" placeholder=\"Postal code\"\n             [class.form-control-danger]=\"postalCode.invalid && postalCode.touched\"\n             required\n             minlength=\"4\" maxlength=\"5\">\n      <small class=\"form-text error\" *ngIf=\"postalCode.invalid && postalCode.touched && postalCode.errors?.required\">\n        Postal code is required!\n      </small>\n      <small class=\"form-text error\"\n             *ngIf=\"postalCode.invalid && postalCode.touched && (postalCode.errors?.minlength || postalCode.errors?.maxlength)\">\n        Invalid postal code\n      </small>\n    </div>\n    <div class=\"col-sm-6 form-group\">\n      <label for=\"input-city\" class=\"sr-only\">City</label>\n      <input name=\"city\" [(ngModel)]=\"customer.address.city\" id=\"input-city\" #city=\"ngModel\"\n             class=\"form-control\" placeholder=\"City\"\n             [class.form-control-danger]=\"city.invalid && city.touched\"\n             required\n             minlength=\"2\" maxlength=\"70\">\n      <small class=\"form-text error\" *ngIf=\"city.invalid && city.touched && city.errors?.required\">\n        City is required!\n      </small>\n      <small class=\"form-text error\"\n             *ngIf=\"city.invalid && city.touched && (city.errors?.minlength || city.errors?.maxlength)\">\n        City should contain from 2 to 70 characters\n      </small>\n    </div>\n    <div class=\"col-sm-3 form-group\">\n      <label for=\"select-country\" class=\"sr-only\">Country</label>\n      <select id=\"select-country\" name=\"country\" [(ngModel)]=\"customer.address.country\"\n              #country=\"ngModel\" class=\"form-control\"\n              required\n              [class.form-control-danger]=\"country.invalid && country.touched\"\n              [class.form-control-placeholder]=\"country.invalid && country.untouched\">\n        <option value=\"undefined\" disabled selected hidden>Country</option>\n        <option *ngFor=\"let country of countries\" [ngValue]=\"parseCountry(country)\">{{country}}</option>\n      </select>\n      <small class=\"form-text error\" *ngIf=\"country.invalid && country.touched && country.errors?.required\">\n        Country is required!\n      </small>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/account/change-address-data/change-address-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeAddressDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_model_customer_model__ = __webpack_require__("../../../../../src/app/@core/model/customer.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_model_country_model__ = __webpack_require__("../../../../../src/app/@core/model/country.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_model_user_model__ = __webpack_require__("../../../../../src/app/@core/model/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangeAddressDataComponent = /** @class */ (function () {
    function ChangeAddressDataComponent() {
        this.countries = Object.values(__WEBPACK_IMPORTED_MODULE_2__core_model_country_model__["a" /* Country */]);
    }
    ChangeAddressDataComponent.prototype.parseCountry = function (type) {
        var country;
        for (var key in __WEBPACK_IMPORTED_MODULE_2__core_model_country_model__["a" /* Country */]) {
            if (type === __WEBPACK_IMPORTED_MODULE_2__core_model_country_model__["a" /* Country */][key]) {
                country = key;
                break;
            }
        }
        return country;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__core_model_user_model__["a" /* User */])
    ], ChangeAddressDataComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__core_model_customer_model__["a" /* Customer */])
    ], ChangeAddressDataComponent.prototype, "customer", void 0);
    ChangeAddressDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-change-address-data',
            template: __webpack_require__("../../../../../src/app/pages/account/change-address-data/change-address-data.component.html"),
            styles: ['.form-control-placeholder {color: #a4abb3 !important;}'],
        }),
        __metadata("design:paramtypes", [])
    ], ChangeAddressDataComponent);
    return ChangeAddressDataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/account/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div ngxProvideParentForm>\n  <div class=\"form-group\" ngxProvideParentForm>\n    <label for=\"input-password\" class=\"sr-only\">Password</label>\n    <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\"\n           class=\"form-control\" placeholder=\"Password\" #password=\"ngModel\"\n           [class.form-control-danger]=\"password.invalid && password.touched\"\n           required\n           [minlength]=\"8\"\n           [maxlength]=\"20\">\n    <small class=\"form-text error\" *ngIf=\"password.invalid && password.touched && password.errors?.required\">Password\n      is required!\n    </small>\n    <small class=\"form-text error\"\n           *ngIf=\"password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)\">\n      Password should contains from 8 to 20 characters\n    </small>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"input-re-password\" class=\"sr-only\">Repeat password</label>\n    <input name=\"rePass\" [(ngModel)]=\"user.confirmPassword\" type=\"password\" id=\"input-re-password\"\n           class=\"form-control\" placeholder=\"Confirm Password\" #rePass=\"ngModel\"\n           [class.form-control-danger]=\"(rePass.invalid || password.value != rePass.value) && rePass.touched\"\n           required>\n    <small class=\"form-text error\" *ngIf=\"rePass.invalid && rePass.touched && rePass.errors?.required\">Password\n      confirmation is required!\n    </small>\n    <small class=\"form-text error\"\n           *ngIf=\"rePass.touched && (password.value != rePass.value) && !rePass.errors?.required\">Password does not\n      match the confirm password.\n    </small>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/account/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_model_user_model__ = __webpack_require__("../../../../../src/app/@core/model/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_model_customer_model__ = __webpack_require__("../../../../../src/app/@core/model/customer.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NgForm */]),
        __metadata("design:type", Object)
    ], ChangePasswordComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__core_model_user_model__["a" /* User */])
    ], ChangePasswordComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__core_model_customer_model__["a" /* Customer */])
    ], ChangePasswordComponent.prototype, "customer", void 0);
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-change-password',
            template: __webpack_require__("../../../../../src/app/pages/account/change-password/change-password.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/account/change-payment-data/change-payment-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div ngxProvideParentForm>\n  <div class=\"form-group\">\n    <label for=\"select-cardtype\" class=\"sr-only\">CreditCard-Type</label>\n    <select id=\"select-cardtype\" name=\"cardType\" [(ngModel)]=\"customer.creditCard.type\"\n            #cardType=\"ngModel\" class=\"form-control\" required ngxProvideParentForm\n            [class.form-control-danger]=\"cardType.invalid && cardType.touched\"\n            [class.form-control-placeholder]=\"cardType.invalid && cardType.untouched\">\n      <option value=\"undefined\" disabled selected hidden>CreditCard-Type</option>\n      <option *ngFor=\"let cType of cardTypes\" [ngValue]=\"cType\">{{cType}}</option>\n    </select>\n    <small class=\"form-text error\" *ngIf=\"cardType.invalid && cardType.touched && cardType.errors?.required\">\n      CardType is required!\n    </small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"input-cardnumber\" class=\"sr-only\">Card number</label>\n    <input [(ngModel)]=\"customer.creditCard.number\" name=\"cardnumber\" id=\"input-cardnumber\"\n           #cardnumber=\"ngModel\"\n           class=\"form-control\" placeholder=\"Card number\" pattern=\"^(\\d{4}[-. ]?){4}|(\\d{4}[-. ]?\\d{6}[-. ]?\\d{5})$\"\n           [class.form-control-danger]=\"cardnumber.invalid && cardnumber.touched\"\n           ngModel\n           required>\n    <small class=\"form-text error\" *ngIf=\"cardnumber.invalid && cardnumber.touched && cardnumber.errors?.required\">\n      CreditCard is required!\n    </small>\n    <small class=\"form-text error\" *ngIf=\"cardnumber.invalid && cardnumber.touched && cardnumber.errors?.pattern\">\n      CreditCard-Number should be the real one!\n    </small>\n  </div>\n  <div class=\"row card-date-inputs\">\n    <div class=\"col-sm-6 form-group\">\n      <label for=\"input-month\" class=\"sr-only\">Expiration Month</label>\n      <input name=\"expMonth\" [(ngModel)]=\"customer.creditCard.expirationMonth\" id=\"input-month\" #expMonth=\"ngModel\"\n             class=\"form-control\" placeholder=\"Month\"\n             [class.form-control-danger]=\"expMonth.invalid && expMonth.touched\"\n             type=\"number\"\n             pattern=\"^(1[0-2]|[1-9])$\"\n             required\n             ngModel\n             minlength=\"1\" maxlength=\"2\">\n      <small class=\"form-text error\" *ngIf=\"expMonth.invalid && expMonth.touched && expMonth.errors?.required\">\n        Expiration month is required!\n      </small>\n      <small class=\"form-text error\"\n             *ngIf=\"expMonth.invalid && expMonth.touched && (expMonth.errors?.minlength || expMonth.errors?.pattern)\">\n        Month is not valid.\n      </small>\n    </div>\n    <div class=\"col-sm-6 form-group\">\n      <label for=\"input-year\" class=\"sr-only\">Expiration Year</label>\n      <input name=\"year\" [(ngModel)]=\"customer.creditCard.expirationYear\" id=\"input-year\" #year=\"ngModel\"\n             class=\"form-control\" placeholder=\"Year\"\n             [class.form-control-danger]=\"year.invalid && year.touched\"\n             required\n             ngModel\n             type=\"number\"\n             ngxCreditcardYear>\n      <small class=\"form-text error\" *ngIf=\"year.invalid && year.touched && year.errors?.required\">\n        Year is required!\n      </small>\n      <small class=\"form-text error\"\n             *ngIf=\"year.invalid && year.touched && (year.errors?.years)\">\n        {{year.errors.years.message}}\n      </small>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/account/change-payment-data/change-payment-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePaymentDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_model_customer_model__ = __webpack_require__("../../../../../src/app/@core/model/customer.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_model_creditcard_type_model__ = __webpack_require__("../../../../../src/app/@core/model/creditcard-type.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_model_user_model__ = __webpack_require__("../../../../../src/app/@core/model/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePaymentDataComponent = /** @class */ (function () {
    function ChangePaymentDataComponent() {
        this.cardTypes = Object.keys(__WEBPACK_IMPORTED_MODULE_2__core_model_creditcard_type_model__["a" /* CreditCardType */]);
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__core_model_user_model__["a" /* User */])
    ], ChangePaymentDataComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__core_model_customer_model__["a" /* Customer */])
    ], ChangePaymentDataComponent.prototype, "customer", void 0);
    ChangePaymentDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-change-payment-data',
            template: __webpack_require__("../../../../../src/app/pages/account/change-payment-data/change-payment-data.component.html"),
            styles: ['.form-control-placeholder {color: #a4abb3 !important;}'],
        }),
        __metadata("design:paramtypes", [])
    ], ChangePaymentDataComponent);
    return ChangePaymentDataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/account/change-user-data/change-user-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row full-name-inputs\" ngxProvideParentForm>\n  <div class=\"col-sm-6 form-group\">\n\n    <label for=\"input-first-name\" class=\"sr-only\">First name</label>\n    <input name=\"fristName\" [(ngModel)]=\"customer.firstName\" id=\"input-first-name\" #firstName=\"ngModel\"\n           class=\"form-control\" placeholder=\"First name\"\n           [class.form-control-danger]=\"firstName.invalid && firstName.touched\"\n           required minlength=\"2\" maxlength=\"20\">\n    <small class=\"form-text error\" *ngIf=\"firstName.invalid && firstName.touched && firstName.errors?.required\">\n      First name is required!\n    </small>\n    <small class=\"form-text error\"\n           *ngIf=\"firstName.invalid && firstName.touched && (firstName.errors?.minlength || firstName.errors?.maxlength)\">\n      First name should contains from 2 to 20 characters\n    </small>\n  </div>\n  <div class=\"col-sm-6 form-group\">\n    <label for=\"input-last-name\" class=\"sr-only\">Last name</label>\n    <input name=\"lastName\" [(ngModel)]=\"customer.lastName\" id=\"input-last-name\" #lastName=\"ngModel\"\n           class=\"form-control\" placeholder=\"Last name\"\n           [class.form-control-danger]=\"lastName.invalid && lastName.touched\"\n           required minlength=\"2\" maxlength=\"70\">\n    <small class=\"form-text error\" *ngIf=\"lastName.invalid && lastName.touched && lastName.errors?.required\">\n      Full name is required!\n    </small>\n    <small class=\"form-text error\"\n           *ngIf=\"lastName.invalid && lastName.touched && (lastName.errors?.minlength || lastName.errors?.maxlength)\">\n      Full name should contain from 2 to 70 characters\n    </small>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/account/change-user-data/change-user-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeUserDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_model_customer_model__ = __webpack_require__("../../../../../src/app/@core/model/customer.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_model_user_model__ = __webpack_require__("../../../../../src/app/@core/model/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangeUserDataComponent = /** @class */ (function () {
    function ChangeUserDataComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__core_model_user_model__["a" /* User */])
    ], ChangeUserDataComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__core_model_customer_model__["a" /* Customer */])
    ], ChangeUserDataComponent.prototype, "customer", void 0);
    ChangeUserDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-change-user-data',
            template: __webpack_require__("../../../../../src/app/pages/account/change-user-data/change-user-data.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ChangeUserDataComponent);
    return ChangeUserDataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/account/edit-account-data/edit-account-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"flex-centered col-lg-6 col-md-6 col-sm-12\">\n    <h2 class=\"title\">Update {{adItem.title}}</h2>\n    <form (ngSubmit)=\"update()\" #form=\"ngForm\">\n      <p></p>\n      <ng-template ngxAdHost></ng-template>\n      <div class=\"d-flex justify-content-center\">\n        <a class=\"btn btn-lg btn-hero-success multibtn\" routerLink=\"/account/overview\">Cancel</a>\n        <button [disabled]=\"submitted || !form.valid\" class=\"btn btn-lg btn-hero-success multibtn\"\n                [class.btn-pulse]=\"submitted\">\n          Save\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/account/edit-account-data/edit-account-data.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".multibtn {\n  margin: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/account/edit-account-data/edit-account-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAccountDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_directives_ad_directive__ = __webpack_require__("../../../../../src/app/@theme/directives/ad.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_ad_service__ = __webpack_require__("../../../../../src/app/@core/services/ad.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_notification_service__ = __webpack_require__("../../../../../src/app/@core/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_customer_service__ = __webpack_require__("../../../../../src/app/@core/services/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditAccountDataComponent = /** @class */ (function () {
    function EditAccountDataComponent(componentFactoryResolver, customerService, notificationService, adService, router) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.customerService = customerService;
        this.notificationService = notificationService;
        this.adService = adService;
        this.router = router;
        this.submitted = false;
    }
    EditAccountDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adService.currentAd.subscribe(function (item) {
            _this.adItem = item;
        });
        this.loadComponent();
    };
    EditAccountDataComponent.prototype.loadComponent = function () {
        if (this.adItem.component !== undefined && this.adItem.component !== null) {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.adItem.component);
            var viewContainerRef = this.adHost.viewContainerRef;
            viewContainerRef.clear();
            var componentRef = viewContainerRef.createComponent(componentFactory);
            (componentRef.instance).user = this.adItem.user;
            (componentRef.instance).customer = this.adItem.customer;
        }
        else {
            this.navigateToOverview();
        }
    };
    EditAccountDataComponent.prototype.update = function () {
        var _this = this;
        if (this.adItem.user != null) {
            this.updatePassword();
        }
        else {
            this.submitted = true;
            this.customerService
                .update(this.adItem.customer)
                .subscribe(function (result) {
                _this.navigateToOverview();
                _this.notificationService.success(_this.adItem.title + ' sucessfully changed', 'Update ' + _this.adItem.title);
            }, function (error) {
                _this.submitted = false;
            });
        }
    };
    EditAccountDataComponent.prototype.updatePassword = function () {
        var _this = this;
        this.customerService
            .changePassword(this.adItem.user)
            .subscribe(function (result) {
            _this.navigateToOverview();
            _this.notificationService.success('Password sucessfully changed', 'Update Password');
        }, function (error) {
            _this.submitted = false;
        });
    };
    EditAccountDataComponent.prototype.navigateToOverview = function () {
        this.router.navigate(['/account/overview']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__theme_directives_ad_directive__["a" /* AdDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__theme_directives_ad_directive__["a" /* AdDirective */])
    ], EditAccountDataComponent.prototype, "adHost", void 0);
    EditAccountDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-edit-account-data',
            template: __webpack_require__("../../../../../src/app/pages/account/edit-account-data/edit-account-data.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/account/edit-account-data/edit-account-data.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_5__core_services_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_4__core_services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_2__core_services_ad_service__["a" /* AdService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], EditAccountDataComponent);
    return EditAccountDataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/account/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"flex-centered col-lg-4 col-md-6 col-sm-12\">\n    <h2 class=\"title\">Login</h2>\n    <small class=\"form-text sub-title\">Hello! Login in with your username</small>\n    <form (ngSubmit)=\"login()\" #form=\"ngForm\" autocomplete=\"nope\">\n      <div class=\"form-group\">\n        <label for=\"input-email\" class=\"sr-only\">Email address</label>\n        <input name=\"email\" [(ngModel)]=\"user.email\" id=\"input-email\" pattern=\".+@.+..+\" class=\"form-control\"\n               placeholder=\"Email address\" #email=\"ngModel\" [class.form-control-danger]=\"email.invalid && email.touched\"\n               required>\n        <small class=\"form-text error\"\n               *ngIf=\"email.invalid && email.touched && email.errors?.required\">Email is required!\n        </small>\n        <small class=\"form-text error\"\n               *ngIf=\"email.invalid && email.touched && email.errors?.pattern\">Email should be the real one!\n        </small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"input-password\" class=\"sr-only\">Password</label>\n        <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\" class=\"form-control\"\n               placeholder=\"Password\" #password=\"ngModel\"\n               [class.form-control-danger]=\"password.invalid && password.touched\"\n               required\n               minlength=\"8\"\n               maxlength=\"20\">\n        <small class=\"form-text error\" *ngIf=\"password.invalid && password.touched\"> Password is required!</small>\n        <small class=\"form-text error\"\n               *ngIf=\"password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)\">\n          Password should contains from 8 to 20 characters\n        </small>\n      </div>\n      <button [disabled]=\"submitted || !form.valid\" class=\"btn btn-block btn-hero-success\"\n              [class.btn-pulse]=\"submitted\">\n        Sign In\n      </button>\n    </form>\n    <div class=\"links\">\n      <small class=\"form-text\"> Don't have an account? <a (click)=\"navigateToRegister()\" class=\"pointer\"><strong>Sign\n        Up</strong></a></small>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/account/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/account/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_customer_service__ = __webpack_require__("../../../../../src/app/@core/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_model_user_model__ = __webpack_require__("../../../../../src/app/@core/model/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_notification_service__ = __webpack_require__("../../../../../src/app/@core/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, customerService, notificationService, router) {
        this.route = route;
        this.customerService = customerService;
        this.notificationService = notificationService;
        this.router = router;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.user = new __WEBPACK_IMPORTED_MODULE_3__core_model_user_model__["a" /* User */]();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.submitted = true;
        this.customerService
            .attemptAuth(this.user)
            .subscribe(function (result) {
            _this.router.navigate([_this.returnUrl]);
            _this.notificationService.success('Enjoy the world of books', 'Welcome to the ng-bookstore');
        }, function (error) {
            _this.submitted = false;
        });
    };
    LoginComponent.prototype.navigateToRegister = function () {
        this.router.navigate(['account/register']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-login',
            template: __webpack_require__("../../../../../src/app/pages/account/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/account/login/login.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__core_services_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_4__core_services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/account/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-logout',
            template: "",
        }),
        __metadata("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/account/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card-header>\n<h2 class=\"title\">Account Overview</h2>\n<div *ngIf=\"loading\"> Loading Data\n  <img\n    src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n</div>\n</nb-card-header>\n<div class=\"row\">\n  <div class=\"col-lg-6 col-md-6 col-sm-12\">\n    <div class=\"row\"><h5 class=\"title col-12 grid-h\">Contact/Address:</h5></div>\n    <div class=\"row\"><div class=\"label col-6 col-md-2\">Name:</div><div class=\"content col-12 col-sm-6 col-md-10\">{{customer.firstName}} {{customer.lastName}}</div></div>\n    <div class=\"row\"><div class=\"label col-6 col-md-2\">Email:</div><div class=\"content col-12 col-sm-6 col-md-10\">{{customer.email}}</div></div>\n    <div class=\"row\"><div class=\"label col-6 col-md-2\">Street:</div><div class=\"content   col-12 col-sm-6 col-md-10\">{{customer.address.street}}</div></div>\n    <div class=\"row\"><div class=\"label col-6 col-md-2\">Postcode/City:</div><div class=\"content   col-12 col-sm-6 col-md-10\">{{customer.address.postalCode}} {{customer.address.city}}</div></div>\n    <div class=\"row\"><div class=\"label col-6 col-md-2\">Country:</div><div class=\"content col-12 col-sm-6 col-md-10\">{{Country[customer.address.country]}}</div></div>\n  </div>\n  <div class=\"col-lg-6 col-md-6 col-sm-12\">\n    <div class=\"row\"><h5 class=\"title col-12 grid-h\">Payment Information:</h5></div>\n    <div class=\"row\"><div class=\"label col-6 col-md-2\">Card-Type:</div><div class=\"content col-12 col-sm-6 col-md-10\">{{customer.creditCard.type}}</div></div>\n    <div class=\"row\"><div class=\"label col-6 col-md-2\">Cardnumber:</div><div class=\"content col-12 col-sm-6 col-md-10\">{{customer.creditCard.number}}</div></div>\n    <div class=\"row\"><div class=\"label col-6 col-md-2\">Expiration:</div><div class=\"content   col-12 col-sm-6 col-md-10\">{{customer.creditCard.expirationMonth}}/{{customer.creditCard.expirationYear}}</div></div>\n  </div>\n</div>\n<div class=\"d-flex justify-content-center\">\n  <button class=\"btn btn-primary btn-md multibtn\"\n          (click)=\"updatePassword()\">\n    Change Password\n  </button>\n  <button class=\"btn btn-primary btn-md multibtn\"\n          (click)=\"updateAddress()\">\n    Edit Address\n  </button>\n  <button class=\"btn btn-primary btn-md multibtn\"\n          (click)=\"updateCreditCard()\">Edit Payment-Data\n  </button>\n</div>\n<div class=\"row\" *ngIf=\"orders !== undefined && orders !== null\">\n  <nb-card class=\"orders\">\n    <nb-card-header>\n      Your Orders:\n    </nb-card-header>\n    <nb-card-body>\n      <div class=\"row\">\n        <div class=\"list-group col-md-12\">\n          <div *ngFor=\"let order of orders\">\n            {{order}}\n          </div>\n        </div>\n      </div>\n    </nb-card-body>\n  </nb-card>\n\n  </div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/account/overview/overview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".multibtn {\n  margin: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/account/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_customer_service__ = __webpack_require__("../../../../../src/app/@core/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_current_user_service__ = __webpack_require__("../../../../../src/app/@core/services/current-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_notification_service__ = __webpack_require__("../../../../../src/app/@core/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_model_country_model__ = __webpack_require__("../../../../../src/app/@core/model/country.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_services_order_service__ = __webpack_require__("../../../../../src/app/@core/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__change_password_change_password_component__ = __webpack_require__("../../../../../src/app/pages/account/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_model_ad_item_model__ = __webpack_require__("../../../../../src/app/@core/model/ad-item.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_services_ad_service__ = __webpack_require__("../../../../../src/app/@core/services/ad.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__change_address_data_change_address_data_component__ = __webpack_require__("../../../../../src/app/pages/account/change-address-data/change-address-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__change_payment_data_change_payment_data_component__ = __webpack_require__("../../../../../src/app/pages/account/change-payment-data/change-payment-data.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(adService, customerService, currentUserService, notificationService, orderService, router) {
        this.adService = adService;
        this.customerService = customerService;
        this.currentUserService = currentUserService;
        this.notificationService = notificationService;
        this.orderService = orderService;
        this.router = router;
        this.loading = true;
        this.Country = __WEBPACK_IMPORTED_MODULE_5__core_model_country_model__["a" /* Country */];
        this.orderYear = new Date().getFullYear();
    }
    OverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUserService.currentUser
            .subscribe(function (user) {
            _this.user = user;
        });
        this.customerService.find(this.user.id)
            .subscribe(function (result) {
            _this.loading = false;
        }, function (error) {
            _this.notificationService.error('There is a problem with your account. Please login again!', 'Account error');
            _this.router.navigate(['/account/logout']);
        });
        this.customerService.currentCustomer
            .subscribe(function (customer) {
            _this.customer = customer;
        });
        this.orderService.searchOrders(this.customer.nr, this.orderYear)
            .subscribe(function (result) {
            _this.orders = result;
        });
    };
    OverviewComponent.prototype.updatePassword = function () {
        this.adService.setAd(new __WEBPACK_IMPORTED_MODULE_8__core_model_ad_item_model__["a" /* AdItem */](__WEBPACK_IMPORTED_MODULE_7__change_password_change_password_component__["a" /* ChangePasswordComponent */], 'Password', this.user, null));
        this.router.navigate(['/account/edit']);
    };
    OverviewComponent.prototype.updateAddress = function () {
        this.adService.setAd(new __WEBPACK_IMPORTED_MODULE_8__core_model_ad_item_model__["a" /* AdItem */](__WEBPACK_IMPORTED_MODULE_10__change_address_data_change_address_data_component__["a" /* ChangeAddressDataComponent */], 'Address', null, this.customer));
        this.router.navigate(['/account/edit']);
    };
    OverviewComponent.prototype.updateCreditCard = function () {
        this.adService.setAd(new __WEBPACK_IMPORTED_MODULE_8__core_model_ad_item_model__["a" /* AdItem */](__WEBPACK_IMPORTED_MODULE_11__change_payment_data_change_payment_data_component__["a" /* ChangePaymentDataComponent */], 'Credit-Card', null, this.customer));
        this.router.navigate(['/account/edit']);
    };
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-overview',
            template: __webpack_require__("../../../../../src/app/pages/account/overview/overview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/account/overview/overview.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__core_services_ad_service__["a" /* AdService */],
            __WEBPACK_IMPORTED_MODULE_1__core_services_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_2__core_services_current_user_service__["a" /* CurrentUserService */],
            __WEBPACK_IMPORTED_MODULE_4__core_services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_6__core_services_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/account/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\r\n  <div class=\"flex-centered col-lg-6 col-md-6 col-sm-12\">\r\n    <h2 class=\"title\">Register</h2>\r\n    <form name=\"register\" (ngSubmit)=\"doRegister()\" #register=\"ngForm\">\r\n      <div id=\"tabs\" class=\"full-width\">\r\n        <ul>\r\n          <li [class.active]=\"selected == 1\">\r\n            <a (click)=\"showTab(1)\" data-toggle=\"collapse\" data-target=\"#cardStep1\">User</a>\r\n          </li>\r\n          <li [class.active]=\"selected == 2\">\r\n            <a (click)=\"showTab(2)\" data-toggle=\"collapse\" data-target=\"#cardStep2\">Address</a>\r\n          </li>\r\n          <li [class.active]=\"selected == 3\">\r\n            <a (click)=\"showTab(3)\" data-toggle=\"collapse\" data-target=\"#cardStep3\">Credit Card</a>\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n      <div class=\"collapse show\" [class.show]=\"selected == 1\">\r\n        <p></p>\r\n        <ngx-change-user-data\r\n          [customer]=\"customer\"\r\n          [user]=\"user\"\r\n        ></ngx-change-user-data>\r\n        <div class=\"form-group\">\r\n          <label for=\"input-email\" class=\"sr-only\">Email address</label>\r\n          <input name=\"email\" [(ngModel)]=\"customer.email\" id=\"input-email\" #email=\"ngModel\"\r\n                 class=\"form-control\" placeholder=\"Email address\" pattern=\".+@.+..+\"\r\n                 [class.form-control-danger]=\"email.invalid && email.touched\" required>\r\n          <small class=\"form-text error\" *ngIf=\"email.invalid && email.touched && email.errors?.required\">Email is\r\n            required!\r\n          </small>\r\n          <small class=\"form-text error\" *ngIf=\"email.invalid && email.touched && email.errors?.pattern\">Email should be the\r\n            real one!\r\n          </small>\r\n        </div>\r\n        <ngx-change-password [user]=\"user\"></ngx-change-password>\r\n        <div class=\"d-flex justify-content-center\">\r\n          <a class=\"btn btn-lg btn-hero-success\" (click)=\"showTab(2)\">\r\n            Next\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"collapse\" [class.show]=\"selected == 2\">\r\n        <p></p>\r\n        <ngx-change-address-data [customer]=\"customer\"></ngx-change-address-data>\r\n        <div class=\"d-flex justify-content-center\">\r\n          <a class=\"btn btn-lg btn-hero-success multibtn\" (click)=\"showTab(1)\">Previous</a>\r\n          <a class=\"btn btn-lg btn-hero-success multibtn\" (click)=\"showTab(3)\">Next</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"collapse\" [class.show]=\"selected == 3\">\r\n        <p></p>\r\n        <ngx-change-payment-data [customer]=\"customer\"></ngx-change-payment-data>\r\n        <div class=\"d-flex justify-content-center\">\r\n          <a class=\"btn btn-lg btn-hero-success multibtn\" (click)=\"showTab(2)\">Previous</a>\r\n          <button [disabled]=\"submitted || !register.valid\" class=\"btn btn-lg btn-hero-success multibtn\"\r\n                  [class.btn-pulse]=\"submitted\">\r\n            Register\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"links\">\r\n      <small class=\"form-text\">\r\n        Already have an account? <a routerLink=\"../login\" class=\"pointer\"><strong>Sign in</strong></a>\r\n      </small>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/account/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width ul {\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n\ndiv#tabs ul {\n  font-family: Exo;\n  font-size: 1.125rem;\n  padding: 0 1.25rem;\n  border-bottom: 1px solid #ebeef2; }\n  div#tabs ul li {\n    background: transparent; }\n    div#tabs ul li a {\n      padding: 1.25rem;\n      color: #a4abb3; }\n    div#tabs ul li a::before {\n      background: #40dc7e; }\n  div#tabs ul li.active {\n    background: transparent; }\n    div#tabs ul li.active a {\n      font-weight: 600;\n      color: #2a2a2a; }\n    div#tabs ul li.active a::before {\n      display: block; }\n\nul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  list-style-type: none;\n  margin: 0; }\n  ul li {\n    cursor: pointer;\n    margin-bottom: -1px;\n    text-align: center; }\n    ul li a {\n      position: relative;\n      text-decoration: none;\n      display: inline-block; }\n    ul li a::before {\n      display: none;\n      position: absolute;\n      content: '';\n      width: 100%;\n      height: 6px;\n      border-radius: 3px;\n      bottom: -2px;\n      left: 0; }\n\na {\n  color: #3dcc6d; }\n\n.multibtn {\n  margin: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/account/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_customer_service__ = __webpack_require__("../../../../../src/app/@core/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_model_customer_model__ = __webpack_require__("../../../../../src/app/@core/model/customer.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_model_user_model__ = __webpack_require__("../../../../../src/app/@core/model/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_model_address_model__ = __webpack_require__("../../../../../src/app/@core/model/address.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_model_creditcard_model__ = __webpack_require__("../../../../../src/app/@core/model/creditcard.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(route, customerService, router) {
        this.route = route;
        this.customerService = customerService;
        this.router = router;
        this.submitted = false;
        this.selected = 1;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.user = new __WEBPACK_IMPORTED_MODULE_4__core_model_user_model__["a" /* User */]();
        this.customer = new __WEBPACK_IMPORTED_MODULE_3__core_model_customer_model__["a" /* Customer */]();
        this.customer.address = new __WEBPACK_IMPORTED_MODULE_5__core_model_address_model__["a" /* Address */]();
        this.customer.creditCard = new __WEBPACK_IMPORTED_MODULE_6__core_model_creditcard_model__["a" /* CreditCard */]();
    };
    RegisterComponent.prototype.doRegister = function () {
        var _this = this;
        this.submitted = true;
        this.customerService
            .register(this.customer, this.user.password)
            .subscribe(function (result) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.submitted = false;
        });
    };
    RegisterComponent.prototype.showTab = function (tab) {
        this.selected = tab;
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-register',
            template: __webpack_require__("../../../../../src/app/pages/account/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/account/register/register.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__core_services_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

});
//# sourceMappingURL=account.module.chunk.js.map