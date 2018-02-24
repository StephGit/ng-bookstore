webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./account/account.module": [
		"../../../../../src/app/pages/account/account.module.ts",
		"account.module"
	],
	"./checkout/checkout.module": [
		"../../../../../src/app/pages/checkout/checkout.module.ts",
		"checkout.module"
	],
	"./details/details.module": [
		"../../../../../src/app/pages/details/details.module.ts",
		"details.module"
	],
	"./shopping-cart/shopping-cart.module": [
		"../../../../../src/app/pages/shopping-cart/shopping-cart.module.ts",
		"shopping-cart.module"
	],
	"app/pages/pages.module": [
		"../../../../../src/app/pages/pages.module.ts",
		"pages.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/@core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_import_guard__ = __webpack_require__("../../../../../src/app/@core/module-import-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/@core/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_catalog_service__ = __webpack_require__("../../../../../src/app/@core/services/catalog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_customer_service__ = __webpack_require__("../../../../../src/app/@core/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_api_service__ = __webpack_require__("../../../../../src/app/@core/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_logout_guard_service__ = __webpack_require__("../../../../../src/app/@core/services/logout-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_notification_service__ = __webpack_require__("../../../../../src/app/@core/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/@core/services/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_current_user_service__ = __webpack_require__("../../../../../src/app/@core/services/current-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_order_service__ = __webpack_require__("../../../../../src/app/@core/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_ad_service__ = __webpack_require__("../../../../../src/app/@core/services/ad.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_error_service__ = __webpack_require__("../../../../../src/app/@core/services/error.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};















var SERVICES = [
    __WEBPACK_IMPORTED_MODULE_13__services_ad_service__["a" /* AdService */],
    __WEBPACK_IMPORTED_MODULE_6__services_api_service__["a" /* ApiService */],
    __WEBPACK_IMPORTED_MODULE_3__services_auth_guard_service__["a" /* AuthGuardService */],
    __WEBPACK_IMPORTED_MODULE_4__services_catalog_service__["a" /* CatalogService */],
    __WEBPACK_IMPORTED_MODULE_10__services_current_user_service__["a" /* CurrentUserService */],
    __WEBPACK_IMPORTED_MODULE_5__services_customer_service__["a" /* CustomerService */],
    __WEBPACK_IMPORTED_MODULE_14__services_error_service__["a" /* ErrorService */],
    __WEBPACK_IMPORTED_MODULE_7__services_logout_guard_service__["a" /* LogoutGuardService */],
    __WEBPACK_IMPORTED_MODULE_8__services_notification_service__["a" /* NotificationService */],
    __WEBPACK_IMPORTED_MODULE_12__services_order_service__["a" /* OrderService */],
    __WEBPACK_IMPORTED_MODULE_9__services_shopping_cart_service__["a" /* ShoppingCartService */],
];
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_2__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: SERVICES.slice(),
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: SERVICES.slice(),
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/@core/model/ad-item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdItem; });
var AdItem = /** @class */ (function () {
    function AdItem(component, title, user, customer) {
        this.component = component;
        this.title = title;
        this.user = user;
        this.customer = customer;
    }
    return AdItem;
}());



/***/ }),

/***/ "../../../../../src/app/@core/model/book.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(isbn, authors, title, price) {
        this.isAddedToCart = false;
        this.isbn = isbn;
        this.authors = authors;
        this.title = title;
        this.price = price;
    }
    return Book;
}());



/***/ }),

/***/ "../../../../../src/app/@core/model/customer.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(nr, email, firstName, lastName, address, creditCard) {
        this.nr = nr;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.creditCard = creditCard;
    }
    return Customer;
}());



/***/ }),

/***/ "../../../../../src/app/@core/model/shopping-cart-item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartItem; });
var ShoppingCartItem = /** @class */ (function () {
    function ShoppingCartItem(book, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this.book = book;
        this.quantity = quantity;
    }
    return ShoppingCartItem;
}());



/***/ }),

/***/ "../../../../../src/app/@core/model/shopping-cart.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCart; });
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this._items = [];
    }
    ShoppingCart.prototype.getTotalPrice = function () {
        return this._items.map(function (i) { return i.book.price * i.quantity; }).reduce(function (a, b) { return a + b; }, 0);
    };
    ShoppingCart.prototype.addItem = function (item) {
        var existingBook = this._items.find(function (i) { return i.book.isbn === item.book.isbn; });
        if (existingBook) {
            existingBook.quantity++;
        }
        else {
            this._items.push(item);
        }
    };
    ShoppingCart.prototype.removeItem = function (item) {
        var existingBook = this._items.find(function (i) { return i.book.isbn === item.book.isbn; });
        if (existingBook && existingBook.quantity > 0) {
            var index = this._items.findIndex(function (i) { return i.book.isbn === item.book.isbn; });
            this._items.splice(index, 1);
        }
    };
    Object.defineProperty(ShoppingCart.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    return ShoppingCart;
}());



/***/ }),

/***/ "../../../../../src/app/@core/model/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(id, email, password, confirmPassword, userGroup) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.userGroup = userGroup;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/@core/module-import-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "../../../../../src/app/@core/services/ad.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_ad_item_model__ = __webpack_require__("../../../../../src/app/@core/model/ad-item.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdService = /** @class */ (function () {
    function AdService() {
        this.adSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new __WEBPACK_IMPORTED_MODULE_1__model_ad_item_model__["a" /* AdItem */](null, null, null, null));
        this.currentAd = this.adSubject.asObservable();
    }
    AdService.prototype.setAd = function (ad) {
        this.adSubject.next(ad);
    };
    AdService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AdService);
    return AdService;
}());



/***/ }),

/***/ "../../../../../src/app/@core/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notification_service__ = __webpack_require__("../../../../../src/app/@core/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Observable class extensions


var ApiService = /** @class */ (function () {
    function ApiService(http, notificationService) {
        this.http = http;
        this.notificationService = notificationService;
        this.apiUrl = "" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_url;
    }
    ApiService.prototype.getDefaultHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
    };
    ApiService.prototype.setHeaders = function (headers) {
        if (headers !== null) {
            return this.headers = headers;
        }
        else {
            return this.headers = this.getDefaultHeaders();
        }
    };
    ApiService.prototype.handleError = function (error) {
        if (error instanceof Response || error.status === 0) {
            this.notificationService.error('No internet connection/ backend connection available.', 'Connection error');
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error);
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    ApiService.prototype.get = function (path, params, headers) {
        var _this = this;
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */](); }
        return this.http.get("" + this.apiUrl + path, { headers: this.setHeaders(headers), params: params })
            .catch(function (error) { return _this.handleError(error); });
    };
    ApiService.prototype.put = function (path, body, headers) {
        var _this = this;
        if (body === void 0) { body = {}; }
        return this.http.put("" + this.apiUrl + path, JSON.stringify(body), { headers: this.setHeaders(headers) })
            .catch(function (error) { return _this.handleError(error); });
    };
    ApiService.prototype.post = function (path, body, headers) {
        var _this = this;
        if (body === void 0) { body = {}; }
        return this.http.post("" + this.apiUrl + path, JSON.stringify(body), { headers: this.setHeaders(headers) })
            .catch(function (error) { return _this.handleError(error); });
    };
    ApiService.prototype.delete = function (path, headers) {
        var _this = this;
        return this.http.delete("" + this.apiUrl + path, { headers: this.setHeaders(headers) })
            .catch(function (error) { return _this.handleError(error); });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__notification_service__["a" /* NotificationService */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/@core/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__current_user_service__ = __webpack_require__("../../../../../src/app/@core/services/current-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, currentUserService) {
        this.router = router;
        this.currentUserService = currentUserService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.currentUserService.isAuthenticated) {
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url and return false
            this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    AuthGuardService.prototype.canActivateChild = function (childRoute, state) {
        if (this.currentUserService.isAuthenticated) {
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url and return false
            this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__current_user_service__["a" /* CurrentUserService */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/@core/services/catalog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/@core/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_service__ = __webpack_require__("../../../../../src/app/@core/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_service__ = __webpack_require__("../../../../../src/app/@core/services/error.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CatalogService = /** @class */ (function () {
    function CatalogService(apiService, errorService, notificationService) {
        this.apiService = apiService;
        this.errorService = errorService;
        this.notificationService = notificationService;
        this.searchResultsUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.isMockEnabled = "" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].mock;
    }
    CatalogService.prototype.searchBooks = function (keywords) {
        var _this = this;
        this.apiService.get('/books', new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpParams */]({
            fromObject: {
                keywords: keywords,
            },
        }), null)
            .catch(function (err) { return _this.handleError(err, 'search'); })
            .subscribe(function (results) {
            _this.searchResultsUpdated.emit(results);
        });
    };
    CatalogService.prototype.getPreviousSearchResults = function () {
        return this.searchResults;
    };
    CatalogService.prototype.getBookDetails = function (isbn) {
        var _this = this;
        return this.apiService.get('/books/' + isbn, null, null)
            .catch(function (err) { return _this.handleError(err, 'find'); });
    };
    CatalogService.prototype.handleError = function (error, method) {
        this.notificationService.error(this.errorService.getCatalogError([method, error.status]), 'Catalog error');
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    CatalogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_6__error_service__["a" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_5__notification_service__["a" /* NotificationService */]])
    ], CatalogService);
    return CatalogService;
}());



/***/ }),

/***/ "../../../../../src/app/@core/services/current-user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_user_model__ = __webpack_require__("../../../../../src/app/@core/model/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CurrentUserService = /** @class */ (function () {
    function CurrentUserService() {
        this.currentUserSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new __WEBPACK_IMPORTED_MODULE_4__model_user_model__["a" /* User */]());
        this.currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();
        this.isAuthenticatedSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    // This runs once on application startup.
    CurrentUserService.prototype.populate = function () {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            this.setAuth(user);
        }
        else {
            this.purgeAuth();
        }
    };
    CurrentUserService.prototype.setAuth = function (user) {
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
        localStorage.setItem('currentUser', JSON.stringify(user));
    };
    CurrentUserService.prototype.purgeAuth = function () {
        this.currentUserSubject.next(new __WEBPACK_IMPORTED_MODULE_4__model_user_model__["a" /* User */]());
        this.isAuthenticatedSubject.next(false);
        localStorage.removeItem('currentUser');
    };
    CurrentUserService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.value;
    };
    CurrentUserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CurrentUserService);
    return CurrentUserService;
}());



/***/ }),

/***/ "../../../../../src/app/@core/services/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/@core/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_customer_model__ = __webpack_require__("../../../../../src/app/@core/model/customer.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notification_service__ = __webpack_require__("../../../../../src/app/@core/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__current_user_service__ = __webpack_require__("../../../../../src/app/@core/services/current-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__model_user_model__ = __webpack_require__("../../../../../src/app/@core/model/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__error_service__ = __webpack_require__("../../../../../src/app/@core/services/error.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CustomerService = /** @class */ (function () {
    function CustomerService(apiService, errorService, notificationService, currentUserService) {
        this.apiService = apiService;
        this.errorService = errorService;
        this.notificationService = notificationService;
        this.currentUserService = currentUserService;
        this.path = '/customers';
        this.currentCustomerSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new __WEBPACK_IMPORTED_MODULE_7__model_customer_model__["a" /* Customer */]());
        this.currentCustomer = this.currentCustomerSubject.asObservable().distinctUntilChanged();
    }
    CustomerService.prototype.attemptAuth = function (credentials) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
            'email': credentials.email,
            'password': credentials.password,
        });
        // TODO add type to get call
        return this.apiService.get(this.path + '/login', null, headers)
            .map(function (data) {
            var user = new __WEBPACK_IMPORTED_MODULE_10__model_user_model__["a" /* User */](data, credentials.email, credentials.password);
            _this.currentUserService.setAuth(user);
            return user;
        })
            .catch(function (err) { return _this.handleError(err, 'Login'); });
    };
    CustomerService.prototype.register = function (customer, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
            'password': password,
            'Content-Type': 'application/json',
            'Accept': 'text/plain',
        });
        return this.apiService.post(this.path, customer, headers)
            .map(function (data) {
            customer.nr = data;
            var user = new __WEBPACK_IMPORTED_MODULE_10__model_user_model__["a" /* User */](customer.nr, customer.email, password);
            _this.currentCustomerSubject.next(customer);
            _this.currentUserService.setAuth(user);
            return data;
        })
            .catch(function (err) { return _this.handleError(err, 'register'); });
    };
    // Update the customer on the server
    CustomerService.prototype.update = function (customer) {
        var _this = this;
        return this.apiService
            .put(this.path + '/' + customer.nr, customer, null)
            .map(function (data) {
            // Update the currentCustomer observable
            _this.currentCustomerSubject.next(data);
            return data;
        })
            .catch(function (err) { return _this.handleError(err, 'update'); });
    };
    CustomerService.prototype.find = function (nr) {
        var _this = this;
        return this.apiService
            .get(this.path + '/' + nr, null, null)
            .map(function (data) {
            _this.currentCustomerSubject.next(data);
            return data;
        })
            .catch(function (err) { return _this.handleError(err, 'find'); });
    };
    CustomerService.prototype.changePassword = function (user) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
            'email': user.email,
            'Content-Type': 'text/plain',
            'Accept': 'application/json',
        });
        return this.apiService
            .put(this.path + '/login', user.password, headers)
            .map(function (data) {
            return data;
        })
            .catch(function (err) { return _this.handleError(err, 'changePassword'); });
    };
    CustomerService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    CustomerService.prototype.handleError = function (error, method) {
        this.notificationService.error(this.errorService.getCustomerError([method, error.status]), 'Customer error');
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    CustomerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_11__error_service__["a" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_8__notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_9__current_user_service__["a" /* CurrentUserService */]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "../../../../../src/app/@core/services/error.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorService; });
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

var ErrorService = /** @class */ (function () {
    function ErrorService() {
        this.customerErrors = new Map();
        this.orderErrors = new Map();
        this.catalogErrors = new Map();
        this.setCustomerErrors();
        this.setOrderErrors();
        this.setCatalogErrors();
    }
    ErrorService.prototype.setCustomerErrors = function () {
        this.customerErrors.set(['register', 400], 'Invalid registration data');
        this.customerErrors.set(['login', 401], 'Email or password is incorrect');
        this.customerErrors.set(['login', 404], 'Email or password is incorrect');
        this.customerErrors.set(['changePassword', 404], 'Email is incorrect');
        this.customerErrors.set(['find', 404], 'No customer with this number exists');
        this.customerErrors.set(['update', 400], 'Invalid data');
        this.customerErrors.set(['update', 404], 'No customer with this number exists');
        this.customerErrors.set(['update', 409], 'Email is allready used by a customer');
    };
    ErrorService.prototype.setOrderErrors = function () {
        this.orderErrors.set(['search', 404], 'No orders found.');
        this.orderErrors.set(['place', 402], 'Payment error occurred');
        this.orderErrors.set(['place', 404], 'The order referenced a non existing book or customer');
        this.orderErrors.set(['cancel', 404], 'No order with the specified number exists.');
        this.orderErrors.set(['cancel', 409], 'The order has allready been shipped');
        this.orderErrors.set(['find', 404], 'No order with the specified number exists.');
    };
    ErrorService.prototype.setCatalogErrors = function () {
        this.catalogErrors.set(['add', 409], 'A book with the same ISBN number already exists.');
        this.catalogErrors.set(['find', 404], 'No book with the specified ISBN number exists.');
        this.catalogErrors.set(['update', 400], 'The ISBN number of the book data does not match the path parameter.');
        this.catalogErrors.set(['update', 404], 'No book with the specified ISBN number exists.');
    };
    ErrorService.prototype.getCustomerError = function (key) {
        return this.customerErrors.get(key);
    };
    ErrorService.prototype.getOrderError = function (key) {
        return this.orderErrors.get(key);
    };
    ErrorService.prototype.getCatalogError = function (key) {
        return this.catalogErrors.get(key);
    };
    ErrorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ErrorService);
    return ErrorService;
}());



/***/ }),

/***/ "../../../../../src/app/@core/services/logout-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__current_user_service__ = __webpack_require__("../../../../../src/app/@core/services/current-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutGuardService = /** @class */ (function () {
    function LogoutGuardService(router, currentUserService) {
        this.router = router;
        this.currentUserService = currentUserService;
    }
    LogoutGuardService.prototype.canActivate = function (route, state) {
        this.currentUserService.purgeAuth();
        this.router.navigate(['']);
        return true;
    };
    LogoutGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__current_user_service__["a" /* CurrentUserService */]])
    ], LogoutGuardService);
    return LogoutGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/@core/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.nId = 0;
    }
    NotificationService.prototype.set = function (notification) {
        notification.id = this.nId;
        this.subject.next(notification);
        this.nId++;
        return notification;
    };
    ;
    NotificationService.prototype.success = function (message, title) {
        this.set({ type: 'success', text: message, title: title });
    };
    NotificationService.prototype.error = function (message, title) {
        this.set({ type: 'error', text: message, title: title });
    };
    NotificationService.prototype.info = function (message, title) {
        this.set({ type: 'info', text: message, title: title });
    };
    NotificationService.prototype.warning = function (message, title) {
        this.set({ type: 'warning', text: message, title: title });
    };
    NotificationService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])()
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "../../../../../src/app/@core/services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/@core/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_service__ = __webpack_require__("../../../../../src/app/@core/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_service__ = __webpack_require__("../../../../../src/app/@core/services/error.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderService = /** @class */ (function () {
    function OrderService(apiService, errorService, notificationService) {
        this.apiService = apiService;
        this.errorService = errorService;
        this.notificationService = notificationService;
    }
    OrderService.prototype.placeOrder = function (order) {
        var _this = this;
        return this.apiService.post('/orders', order, null)
            .catch(function (err) { return _this.handleError(err, 'place'); });
    };
    OrderService.prototype.findOrder = function (nr) {
        var _this = this;
        return this.apiService.get('/orders/' + nr, null, null)
            .catch(function (err) { return _this.handleError(err, 'find'); });
    };
    // TODO map
    OrderService.prototype.searchOrders = function (customerNr, year) {
        var _this = this;
        return this.apiService.get('/orders', new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpParams */]({
            fromObject: {
                customerNr: customerNr.toString(),
                year: year.toString(),
            },
        }), null)
            .catch(function (err) { return _this.handleError(err, 'search'); });
    };
    OrderService.prototype.cancelOrder = function (nr) {
        var _this = this;
        return this.apiService.delete('/orders?nr=' + nr, null)
            .catch(function (err) { return _this.handleError(err, 'cancel'); });
    };
    OrderService.prototype.handleError = function (error, method) {
        this.notificationService.error(this.errorService.getOrderError([method, error.status]), 'Order error');
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    OrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_5__error_service__["a" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_3__notification_service__["a" /* NotificationService */]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "../../../../../src/app/@core/services/shopping-cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_shopping_cart_model__ = __webpack_require__("../../../../../src/app/@core/model/shopping-cart.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_book_model__ = __webpack_require__("../../../../../src/app/@core/model/book.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_shopping_cart_item_model__ = __webpack_require__("../../../../../src/app/@core/model/shopping-cart-item.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService() {
        this.currentShoppingCart = new __WEBPACK_IMPORTED_MODULE_1__model_shopping_cart_model__["a" /* ShoppingCart */]();
        this.isMockEnabled = "" + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].mock;
        this.STORAGE_KEY = 'shopping-cart';
    }
    ShoppingCartService.prototype.getCurrentShoppingCart = function () {
        if (!this.currentShoppingCart.items || this.currentShoppingCart.items.length === 0) {
            var cartFromStorage = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
            if (cartFromStorage && cartFromStorage._items) {
                var storedShoppingCart_1 = new __WEBPACK_IMPORTED_MODULE_1__model_shopping_cart_model__["a" /* ShoppingCart */]();
                cartFromStorage._items.forEach(function (i) {
                    return storedShoppingCart_1.addItem(new __WEBPACK_IMPORTED_MODULE_3__model_shopping_cart_item_model__["a" /* ShoppingCartItem */](new __WEBPACK_IMPORTED_MODULE_2__model_book_model__["a" /* Book */](i.book.isbn, i.book.authors, i.book.title, i.book.price), i.quantity));
                });
                this.currentShoppingCart = storedShoppingCart_1;
            }
        }
        return this.currentShoppingCart;
    };
    ShoppingCartService.prototype.addItemToShoppingCart = function (item) {
        this.currentShoppingCart.addItem(item);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.currentShoppingCart));
    };
    ShoppingCartService.prototype.removeItemFromShoppingCart = function (item) {
        this.currentShoppingCart.removeItem(item);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.currentShoppingCart));
    };
    ShoppingCartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/components/book-list-item/book-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.title {\n  font-size: 1.3em; }\n\n.btn-icon {\n  float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/components/book-list-item/book-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/@core/services/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_notification_service__ = __webpack_require__("../../../../../src/app/@core/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookListComponent = /** @class */ (function () {
    function BookListComponent(cartService, notificationService) {
        this.cartService = cartService;
        this.notificationService = notificationService;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], BookListComponent.prototype, "books", void 0);
    BookListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-book-list',
            styles: [__webpack_require__("../../../../../src/app/@theme/components/book-list-item/book-list.component.scss")],
            template: "\n    <div class=\"list-group\">\n      <div *ngFor=\"let b of books\">\n        <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n          <div class=\"wrapper\">\n            <div class=\"details col-md-4\">\n              <div class=\"title\">{{ b.title }}</div>\n              <div class=\"authors\">\n                <div class=\"desc\">by {{ b.authors }}</div>\n              </div>\n              <div class=\"isbn\">\n                <div class=\"desc\">{{ b.isbn }}</div>\n              </div>\n            </div>\n            <div class=\"price  col-md-4\">\n              {{ b.price | currency:'USD'}}\n            </div>\n            <div class=\"col-md-2\">\n                <ngx-shopping-cart-add-button [book]=\"b\"></ngx-shopping-cart-add-button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_shopping_cart_service__["a" /* ShoppingCartService */], __WEBPACK_IMPORTED_MODULE_2__core_services_notification_service__["a" /* NotificationService */]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host-context(.nb-theme-default) .socials {\n    font-size: 2rem; }\n    :host-context(.nb-theme-default) .socials a {\n      padding: 0.4rem;\n      color: #a4abb3;\n      transition: color ease-out 0.1s; }\n      :host-context(.nb-theme-default) .socials a:hover {\n        color: #2a2a2a; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) .socials {\n      font-size: 1.5rem; } }\n\n:host-context(.nb-theme-cosmic) {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host-context(.nb-theme-cosmic) .socials {\n    font-size: 2rem; }\n    :host-context(.nb-theme-cosmic) .socials a {\n      padding: 0.4rem;\n      color: #a1a1e5;\n      transition: color ease-out 0.1s; }\n      :host-context(.nb-theme-cosmic) .socials a:hover {\n        color: #ffffff; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) .socials {\n      font-size: 1.5rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-footer',
            styles: [__webpack_require__("../../../../../src/app/@theme/components/footer/footer.component.scss")],
            template: "\n    <span class=\"created-by\">Created by <b>Stephan and Adrian</b> 2018</span>\n    <div class=\"socials\">\n      <a href=\"https://github.com/StephGit/bookstore-app\" target=\"_blank\" class=\"ion ion-social-github\"></a>\n    </div>\n  ",
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\"\r\n     [class.left]=\"position === 'normal'\"\r\n     [class.right]=\"position === 'inverse'\">\r\n  <div class=\"logo-containter\">\r\n    <div class=\"logo\" (click)=\"goToHome()\">ng-<span>bookstore</span></div>\r\n  </div>\r\n</div>\r\n\r\n<nb-actions\r\n  size=\"medium\"\r\n  class=\"header-container\"\r\n  [class.right]=\"position === 'normal'\"\r\n  [class.left]=\"position === 'inverse'\">\r\n  <nb-action>\r\n    <div *ngIf=\"currentUser?.email\" class=\"user-container with-menu\">\r\n      <nb-user [menu]=\"items\" [onlyPicture]=\"true\" [picture]=\"picture\">\r\n      </nb-user>\r\n    </div>\r\n    <a *ngIf=\"!currentUser.email\" (click)=\"navigateToLogin()\" class=\"pointer\">Login</a>\r\n  </nb-action>\r\n  <nb-action class=\"control-item\" (click)=\"navigateToShoppingCart()\"  icon=\"ion-ios-cart-outline\">\r\n  </nb-action>\r\n  <nb-action class=\"control-item search\">\r\n  <ngx-search-input (search)=\"startSearch($event)\"></ngx-search-input>\r\n  </nb-action>\r\n</nb-actions>\r\n"

/***/ }),

/***/ "../../../../../src/app/@theme/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n  :host-context(.nb-theme-default) .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  :host-context(.nb-theme-default) .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    width: 100%;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n  :host-context(.nb-theme-default) .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  :host-context(.nb-theme-default) .control-item {\n    display: block; }\n  :host-context(.nb-theme-default) .search {\n    width: 100%;\n    display: inherit; }\n  :host-context(.nb-theme-default) .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    :host-context(.nb-theme-default) .header-container .navigation {\n      padding-right: 1.25rem;\n      font-size: 2.5rem;\n      text-decoration: none; }\n      :host-context(.nb-theme-default) .header-container .navigation i {\n        display: block; }\n    :host-context(.nb-theme-default) .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      border-left: 1px solid #ebeef2;\n      white-space: nowrap;\n      cursor: pointer; }\n      :host-context(.nb-theme-default) .header-container .logo span {\n        font-weight: 400; }\n  :host-context(.nb-theme-default) nb-user div .user-picture {\n    width: 2em !important;\n    height: 2em !important; }\n  :host-context(.nb-theme-default) nb-user div .user-context-menu ul li > a {\n    padding: 0.375rem 2rem !important; }\n  :host-context(.nb-theme-default) nb-action:first-child {\n    border-left: 1px solid #ebeef2 !important; }\n  @media (max-width: 991px) {\n    :host-context(.nb-theme-default) nb-action:not(.toggle-layout) {\n      border: none; }\n    :host-context(.nb-theme-default) .toggle-layout {\n      padding: 0; } }\n  @media (max-width: 767px) {\n    :host-context(.nb-theme-default) nb-user /deep/ .user-name {\n      display: none; } }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) .header-container .logo {\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-default) nb-action:not(.toggle-layout) {\n      padding: 0; } }\n\n:host-context(.nb-theme-cosmic) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n  :host-context(.nb-theme-cosmic) .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  :host-context(.nb-theme-cosmic) .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    width: 100%;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n  :host-context(.nb-theme-cosmic) .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  :host-context(.nb-theme-cosmic) .control-item {\n    display: block; }\n  :host-context(.nb-theme-cosmic) .search {\n    width: 100%;\n    display: inherit; }\n  :host-context(.nb-theme-cosmic) .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    :host-context(.nb-theme-cosmic) .header-container .navigation {\n      padding-right: 1.25rem;\n      font-size: 2.5rem;\n      text-decoration: none; }\n      :host-context(.nb-theme-cosmic) .header-container .navigation i {\n        display: block; }\n    :host-context(.nb-theme-cosmic) .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      border-left: 1px solid #342e73;\n      white-space: nowrap;\n      cursor: pointer; }\n      :host-context(.nb-theme-cosmic) .header-container .logo span {\n        font-weight: 400; }\n  :host-context(.nb-theme-cosmic) nb-user div .user-picture {\n    width: 2em !important;\n    height: 2em !important; }\n  :host-context(.nb-theme-cosmic) nb-user div .user-context-menu ul li > a {\n    padding: 0.375rem 2rem !important; }\n  :host-context(.nb-theme-cosmic) nb-action:first-child {\n    border-left: 1px solid #342e73 !important; }\n  @media (max-width: 991px) {\n    :host-context(.nb-theme-cosmic) nb-action:not(.toggle-layout) {\n      border: none; }\n    :host-context(.nb-theme-cosmic) .toggle-layout {\n      padding: 0; } }\n  @media (max-width: 767px) {\n    :host-context(.nb-theme-cosmic) nb-user /deep/ .user-name {\n      display: none; } }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) .header-container .logo {\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-cosmic) nb-action:not(.toggle-layout) {\n      padding: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_catalog_service__ = __webpack_require__("../../../../../src/app/@core/services/catalog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_current_user_service__ = __webpack_require__("../../../../../src/app/@core/services/current-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidebarService, catalogService, currentUserService, router, themeService) {
        this.sidebarService = sidebarService;
        this.catalogService = catalogService;
        this.currentUserService = currentUserService;
        this.router = router;
        this.themeService = themeService;
        this.position = 'normal';
        this.picture = 'assets/images/user.png';
        this.items = [
            { title: 'Account', link: '/account/overview' },
            { title: 'Logout', link: '/account/logout' }
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.themeService.changeTheme('default');
        this.currentUserService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
        });
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
    };
    HeaderComponent.prototype.toggleSettings = function () {
        this.sidebarService.toggle(false, 'settings-sidebar');
        return false;
    };
    HeaderComponent.prototype.goToHome = function () {
        this.router.navigate(['']);
    };
    HeaderComponent.prototype.navigateToShoppingCart = function () {
        this.router.navigate(['/shopping-cart']);
    };
    HeaderComponent.prototype.navigateToLogin = function () {
        this.router.navigate(['/account/login']);
    };
    HeaderComponent.prototype.startSearch = function (keywords) {
        if (this.router.url !== '/') {
            this.router.navigate(['/']);
        }
        this.catalogService.searchBooks(keywords);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "position", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-header',
            styles: [__webpack_require__("../../../../../src/app/@theme/components/header/header.component.scss")],
            template: __webpack_require__("../../../../../src/app/@theme/components/header/header.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["i" /* NbSidebarService */],
            __WEBPACK_IMPORTED_MODULE_2__core_services_catalog_service__["a" /* CatalogService */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_current_user_service__["a" /* CurrentUserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["l" /* NbThemeService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__("../../../../../src/app/@theme/components/header/header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__ = __webpack_require__("../../../../../src/app/@theme/components/footer/footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_cart_add_button_shopping_cart_add_button_component__ = __webpack_require__("../../../../../src/app/@theme/components/shopping-cart-add-button/shopping-cart-add-button.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__shopping_cart_add_button_shopping_cart_add_button_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_list_item_book_list_component__ = __webpack_require__("../../../../../src/app/@theme/components/book-list-item/book-list.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_input_search_input_component__ = __webpack_require__("../../../../../src/app/@theme/components/search-input/search-input.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__search_input_search_input_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tiny_mce_tiny_mce_component__ = __webpack_require__("../../../../../src/app/@theme/components/tiny-mce/tiny-mce.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__tiny_mce_tiny_mce_component__["a"]; });








/***/ }),

/***/ "../../../../../src/app/@theme/components/search-input/search-input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%; }\n  :host i.control-icon::before {\n    font-size: 2.3rem; }\n  :host i.control-icon:hover {\n    cursor: pointer; }\n  :host input {\n    border: 1px solid #dadfe6;\n    outline: none;\n    margin-left: 1rem;\n    transition: width 0.2s ease; }\n  :host /deep/ search-input input {\n    background: transparent; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/components/search-input/search-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchInputComponent; });
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

var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent() {
        this.search = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.isInputShown = false;
    }
    SearchInputComponent.prototype.hideInput = function () {
        this.isInputShown = false;
    };
    SearchInputComponent.prototype.onSearch = function (val) {
        this.search.emit(val);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SearchInputComponent.prototype, "search", void 0);
    SearchInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-search-input',
            styles: [__webpack_require__("../../../../../src/app/@theme/components/search-input/search-input.component.scss")],
            template: "\n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" (keyup.enter)=\"onSearch(searchString)\"\n             [(ngModel)]=\"searchString\" placeholder=\"Search for a book...\">\n      <span class=\"input-group-btn\">\n            <button class=\"btn btn-info\" (click)=\"onSearch(searchString)\">\n             <i class=\"fa fa-search\"></i>\n            </button>\n          </span>\n    </div>\n  ",
        })
    ], SearchInputComponent);
    return SearchInputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/components/shopping-cart-add-button/shopping-cart-add-button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  max-width: 70px;\n  float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/components/shopping-cart-add-button/shopping-cart-add-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartAddButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_model_book_model__ = __webpack_require__("../../../../../src/app/@core/model/book.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_model_shopping_cart_item_model__ = __webpack_require__("../../../../../src/app/@core/model/shopping-cart-item.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/@core/services/shopping-cart.service.ts");
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





var ShoppingCartAddButtonComponent = /** @class */ (function () {
    function ShoppingCartAddButtonComponent(cartService, notificationService) {
        this.cartService = cartService;
        this.notificationService = notificationService;
    }
    ShoppingCartAddButtonComponent.prototype.addToShoppingCart = function (book) {
        book.isAddedToCart = true;
        this.cartService.addItemToShoppingCart(new __WEBPACK_IMPORTED_MODULE_2__core_model_shopping_cart_item_model__["a" /* ShoppingCartItem */](book, 1));
        this.notificationService.info(book.title + ' ' + book.price, '1 item added to Cart');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__core_model_book_model__["a" /* Book */])
    ], ShoppingCartAddButtonComponent.prototype, "book", void 0);
    ShoppingCartAddButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-shopping-cart-add-button',
            styles: [__webpack_require__("../../../../../src/app/@theme/components/shopping-cart-add-button/shopping-cart-add-button.component.scss")],
            template: "\n    <button *ngIf=\"!book.isAddedToCart\" type=\"button\"\n            (click)=\"addToShoppingCart(book)\" class=\"btn btn-success btn-icon\">\n      <i class=\"fa fa-cart-plus\"></i>\n    </button>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_services_shopping_cart_service__["a" /* ShoppingCartService */], __WEBPACK_IMPORTED_MODULE_4__core_services_notification_service__["a" /* NotificationService */]])
    ], ShoppingCartAddButtonComponent);
    return ShoppingCartAddButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/components/tiny-mce/tiny-mce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinyMCEComponent; });
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

var TinyMCEComponent = /** @class */ (function () {
    function TinyMCEComponent(host) {
        this.host = host;
        this.editorKeyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    TinyMCEComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            target: this.host.nativeElement,
            plugins: ['link', 'paste', 'table'],
            skin_url: 'assets/skins/lightgray',
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup', function () {
                    _this.editorKeyup.emit(editor.getContent());
                });
            },
            height: '320',
        });
    };
    TinyMCEComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], TinyMCEComponent.prototype, "editorKeyup", void 0);
    TinyMCEComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-tiny-mce',
            template: '',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], TinyMCEComponent);
    return TinyMCEComponent;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/directives/ad.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdDirective; });
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

var AdDirective = /** @class */ (function () {
    function AdDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    AdDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[ngxAdHost]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */]])
    ], AdDirective);
    return AdDirective;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/directives/creditcard-year.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditcardYearDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CreditcardYearDirective = /** @class */ (function () {
    function CreditcardYearDirective() {
    }
    CreditcardYearDirective_1 = CreditcardYearDirective;
    CreditcardYearDirective.prototype.validate = function (c) {
        var numValue = Number(c.value);
        var currentYear = new Date().getFullYear();
        var maxYear = currentYear + 10;
        var isValid = !isNaN(numValue) && numValue >= currentYear && numValue <= maxYear;
        var message = {
            'years': {
                'message': 'The year must be a valid number between ' + currentYear + ' and ' + maxYear,
            },
        };
        return isValid ? null : message;
    };
    CreditcardYearDirective = CreditcardYearDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[ngxCreditcardYear]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: CreditcardYearDirective_1, multi: true }],
        })
    ], CreditcardYearDirective);
    return CreditcardYearDirective;
    var CreditcardYearDirective_1;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/directives/provide-parent-form.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvideParentFormDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ProvideParentFormDirective = /** @class */ (function () {
    function ProvideParentFormDirective() {
    }
    ProvideParentFormDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */])({
            selector: '[ngxProvideParentForm]',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* ControlContainer */],
                    useFactory: function (form) {
                        return form;
                    },
                    deps: [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* NgForm */]],
                },
            ],
        })
    ], ProvideParentFormDirective);
    return ProvideParentFormDirective;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/layouts/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sample_sample_layout__ = __webpack_require__("../../../../../src/app/@theme/layouts/sample/sample.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sample_sample_layout__["a"]; });



/***/ }),

/***/ "../../../../../src/app/@theme/layouts/sample/sample.layout.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  /* stylelint-disable */ }\n  :host-context(.nb-theme-default) nb-layout-column.small {\n    -webkit-box-flex: 0.15 !important;\n        -ms-flex: 0.15 !important;\n            flex: 0.15 !important; }\n  :host-context(.nb-theme-default) toaster-container /deep/ #toast-container .toast-close-button {\n    right: 0; }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-default) .main-content {\n      padding: 0.75rem !important; } }\n  @media (max-width: 767px) {\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n      margin-top: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n        height: calc(100vh - 4.75rem) !important;\n        border-top-right-radius: 0; }\n        :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n          padding-top: 0; }\n    :host-context(.nb-theme-default) .main-btn {\n      display: none; } }\n\n:host-context(.nb-theme-cosmic) {\n  /* stylelint-disable */ }\n  :host-context(.nb-theme-cosmic) nb-layout-column.small {\n    -webkit-box-flex: 0.15 !important;\n        -ms-flex: 0.15 !important;\n            flex: 0.15 !important; }\n  :host-context(.nb-theme-cosmic) toaster-container /deep/ #toast-container .toast-close-button {\n    right: 0; }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) .main-content {\n      padding: 0.75rem !important; } }\n  @media (max-width: 767px) {\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n      margin-top: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n        height: calc(100vh - 4.75rem) !important;\n        border-top-right-radius: 0; }\n        :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n          padding-top: 0; }\n    :host-context(.nb-theme-cosmic) .main-btn {\n      display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/sample/sample.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_withLatestFrom__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_style_loader_angular2_toaster_toaster_css__ = __webpack_require__("../../../../style-loader/index.js!../../../../angular2-toaster/toaster.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_style_loader_angular2_toaster_toaster_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_style_loader_angular2_toaster_toaster_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_notification_service__ = __webpack_require__("../../../../../src/app/@core/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// TODO: move layouts into the framework
var SampleLayoutComponent = /** @class */ (function () {
    function SampleLayoutComponent(toasterService, notificationService) {
        var _this = this;
        this.toasterService = toasterService;
        this.notificationService = notificationService;
        this.layout = {
            name: 'One Column',
            icon: 'nb-layout-default',
            id: 'one-column',
            selected: true,
        };
        this.sidebar = {
            name: 'Left Sidebar',
            icon: 'nb-layout-sidebar-left',
            id: 'left',
            selected: true,
        };
        this.position = 'toast-top-left';
        this.animationType = 'fade';
        this.timeout = 5000;
        this.toastsLimit = 5;
        this.type = 'default';
        this.isNewestOnTop = true;
        this.isHideOnClick = true;
        this.isDuplicatesPrevented = false;
        this.isCloseButton = true;
        this.types = ['default', 'info', 'success', 'warning', 'error'];
        this.animations = ['fade', 'flyLeft', 'flyRight', 'slideDown', 'slideUp'];
        this.positions = ['toast-top-full-width', 'toast-bottom-full-width', 'toast-top-left', 'toast-top-center',
            'toast-top-right', 'toast-bottom-right', 'toast-bottom-center', 'toast-bottom-left', 'toast-center'];
        this.notificate$ = this.notificationService.getMessage().subscribe(function (notification) {
            _this.showToast(notification.type, notification.title, notification.text);
        });
    }
    SampleLayoutComponent.prototype.showToast = function (type, title, body) {
        this.config = new __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterConfig */]({
            positionClass: this.position,
            timeout: this.timeout,
            newestOnTop: this.isNewestOnTop,
            tapToDismiss: this.isHideOnClick,
            preventDuplicates: this.isDuplicatesPrevented,
            animation: this.animationType,
            limit: this.toastsLimit,
        });
        var toast = {
            type: type,
            title: title,
            body: body,
            timeout: this.timeout,
            showCloseButton: this.isCloseButton,
            bodyOutputType: __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["a" /* BodyOutputType */].TrustedHtml,
        };
        this.toasterService.popAsync(toast);
    };
    SampleLayoutComponent.prototype.ngOnDestroy = function () {
        this.notificate$.unsubscribe();
    };
    SampleLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-sample-layout',
            styles: [__webpack_require__("../../../../../src/app/@theme/layouts/sample/sample.layout.scss")],
            template: "\n    <nb-layout [center]=\"layout.id === 'center-column'\" windowMode>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-layout-column class=\"main-content\">\n        <toaster-container [toasterconfig]=\"config\"></toaster-container>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_5__core_services_notification_service__["a" /* NotificationService */]])
    ], SampleLayoutComponent);
    return SampleLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/pipes/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'ngxCapitalize' })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__capitalize_pipe__ = __webpack_require__("../../../../../src/app/@theme/pipes/capitalize.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__capitalize_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plural_pipe__ = __webpack_require__("../../../../../src/app/@theme/pipes/plural.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__plural_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__round_pipe__ = __webpack_require__("../../../../../src/app/@theme/pipes/round.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__round_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timing_pipe__ = __webpack_require__("../../../../../src/app/@theme/pipes/timing.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__timing_pipe__["a"]; });






/***/ }),

/***/ "../../../../../src/app/@theme/pipes/plural.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluralPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PluralPipe = /** @class */ (function () {
    function PluralPipe() {
    }
    PluralPipe.prototype.transform = function (input, label, pluralLabel) {
        if (pluralLabel === void 0) { pluralLabel = ''; }
        input = input || 0;
        return input === 1
            ? input + " " + label
            : pluralLabel
                ? input + " " + pluralLabel
                : input + " " + label + "s";
    };
    PluralPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'ngxPlural' })
    ], PluralPipe);
    return PluralPipe;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/pipes/round.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (input) {
        return Math.round(input);
    };
    RoundPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'ngxRound' })
    ], RoundPipe);
    return RoundPipe;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/pipes/timing.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimingPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimingPipe = /** @class */ (function () {
    function TimingPipe() {
    }
    TimingPipe.prototype.transform = function (time) {
        if (time) {
            var minutes = Math.floor(time / 60);
            var seconds = Math.floor(time % 60);
            return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
        }
        return '00:00';
    };
    TimingPipe.prototype.initZero = function (time) {
        return time < 10 ? '0' : '';
    };
    TimingPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'timing' })
    ], TimingPipe);
    return TimingPipe;
}());



/***/ }),

/***/ "../../../../../src/app/@theme/styles/theme.cosmic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COSMIC_THEME; });
var COSMIC_THEME = {
    name: 'cosmic',
    base: 'default',
    variables: {
        temperature: [
            '#2ec7fe',
            '#31ffad',
            '#7bff24',
            '#fff024',
            '#f7bd59',
        ],
        solar: {
            gradientLeft: '#7bff24',
            gradientRight: '#2ec7fe',
            shadowColor: '#19977E',
            radius: ['70%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            lineBg: '#d1d1ff',
            lineShadowBlur: '14',
            itemColor: '#BEBBFF',
            itemBorderColor: '#ffffff',
            itemEmphasisBorderColor: '#ffffff',
            shadowLineDarkBg: '#655ABD',
            shadowLineShadow: 'rgba(33, 7, 77, 0.5)',
            gradFrom: 'rgba(118, 89, 255, 0.4)',
            gradTo: 'rgba(164, 84, 255, 0.5)',
        },
        electricity: {
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipLineColor: 'rgba(255, 255, 255, 0.1)',
            tooltipLineWidth: '1',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            axisLineColor: 'rgba(161, 161 ,229, 0.3)',
            xAxisTextColor: '#a1a1e5',
            yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',
            itemBorderColor: '#ffffff',
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#00ffaa',
            lineGradTo: '#fff835',
            lineShadow: 'rgba(14, 16, 48, 0.4)',
            areaGradFrom: 'rgba(188, 92, 255, 0.5)',
            areaGradTo: 'rgba(188, 92, 255, 0)',
            shadowLineDarkBg: '#a695ff',
        },
        bubbleMap: {
            titleColor: '#ffffff',
            areaColor: '#2c2961',
            areaHoverColor: '#a1a1e5',
            areaBorderColor: '#654ddb',
        },
        echarts: {
            bg: '#3d3780',
            textColor: '#ffffff',
            axisLineColor: '#a1a1e5',
            splitLineColor: '#342e73',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '1',
        },
        chartjs: {
            axisLineColor: '#a1a1e5',
            textColor: '#ffffff',
        },
    },
};


/***/ }),

/***/ "../../../../../src/app/@theme/styles/theme.default.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_THEME; });
var DEFAULT_THEME = {
    name: 'default',
    base: null,
    variables: {
        // Safari fix
        temperature: [
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
        ],
        solar: {
            gradientLeft: '#42db7d',
            gradientRight: '#42db7d',
            shadowColor: 'rgba(0, 0, 0, 0)',
            radius: ['80%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: '#ffffff',
            tooltipBorderColor: '#c0c8d1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            lineBg: '#c0c8d1',
            lineShadowBlur: '1',
            itemColor: '#bcc3cc',
            itemBorderColor: '#bcc3cc',
            itemEmphasisBorderColor: '#42db7d',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: '#ebeef2',
            gradTo: '#ebeef2',
        },
        electricity: {
            tooltipBg: '#ffffff',
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: '#ebeef2',
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            axisLineColor: 'rgba(0, 0, 0, 0)',
            xAxisTextColor: '#2a2a2a',
            yAxisSplitLine: '#ebeef2',
            itemBorderColor: '#42db7d',
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: '#42db7d',
            lineGradTo: '#42db7d',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(235, 238, 242, 0.5)',
            areaGradTo: 'rgba(235, 238, 242, 0.5)',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: '#484848',
            areaColor: '#dddddd',
            areaHoverColor: '#cccccc',
            areaBorderColor: '#ebeef2',
        },
        echarts: {
            bg: '#ffffff',
            textColor: '#484848',
            axisLineColor: '#bbbbbb',
            splitLineColor: '#ebeef2',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: '#cccccc',
            textColor: '#484848',
        },
    },
};


/***/ }),

/***/ "../../../../../src/app/@theme/theme.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__("../../../../../src/app/@theme/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes__ = __webpack_require__("../../../../../src/app/@theme/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layouts__ = __webpack_require__("../../../../../src/app/@theme/layouts/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_theme_default__ = __webpack_require__("../../../../../src/app/@theme/styles/theme.default.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_theme_cosmic__ = __webpack_require__("../../../../../src/app/@theme/styles/theme.cosmic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_creditcard_year_directive__ = __webpack_require__("../../../../../src/app/@theme/directives/creditcard-year.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_ad_directive__ = __webpack_require__("../../../../../src/app/@theme/directives/ad.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_provide_parent_form_directive__ = __webpack_require__("../../../../../src/app/@theme/directives/provide-parent-form.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_book_list_item_book_list_component__ = __webpack_require__("../../../../../src/app/@theme/components/book-list-item/book-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var BASE_MODULES = [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_10_angular2_toaster__["c" /* ToasterModule */]];
var NB_MODULES = [
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["b" /* NbCardModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["d" /* NbLayoutModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["j" /* NbTabsetModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["f" /* NbRouteTabsetModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["e" /* NbMenuModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["m" /* NbUserModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["a" /* NbActionsModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["g" /* NbSearchModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["h" /* NbSidebarModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["c" /* NbCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
];
var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_5__components__["b" /* HeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["d" /* ShoppingCartAddButtonComponent */],
    __WEBPACK_IMPORTED_MODULE_14__components_book_list_item_book_list_component__["a" /* BookListComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["a" /* FooterComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["c" /* SearchInputComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["e" /* TinyMCEComponent */],
    __WEBPACK_IMPORTED_MODULE_7__layouts__["a" /* SampleLayoutComponent */],
];
var PIPES = [
    __WEBPACK_IMPORTED_MODULE_6__pipes__["a" /* CapitalizePipe */],
    __WEBPACK_IMPORTED_MODULE_6__pipes__["b" /* PluralPipe */],
    __WEBPACK_IMPORTED_MODULE_6__pipes__["c" /* RoundPipe */],
    __WEBPACK_IMPORTED_MODULE_6__pipes__["d" /* TimingPipe */],
];
var DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_12__directives_ad_directive__["a" /* AdDirective */],
    __WEBPACK_IMPORTED_MODULE_11__directives_creditcard_year_directive__["a" /* CreditcardYearDirective */],
    __WEBPACK_IMPORTED_MODULE_13__directives_provide_parent_form_directive__["a" /* ProvideParentFormDirective */],
];
var NB_THEME_PROVIDERS = __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["k" /* NbThemeModule */].forRoot({
    name: 'cosmic',
}, [__WEBPACK_IMPORTED_MODULE_8__styles_theme_default__["a" /* DEFAULT_THEME */], __WEBPACK_IMPORTED_MODULE_9__styles_theme_cosmic__["a" /* COSMIC_THEME */]]).providers.concat(__WEBPACK_IMPORTED_MODULE_4__nebular_theme__["h" /* NbSidebarModule */].forRoot().providers, __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["e" /* NbMenuModule */].forRoot().providers);
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule_1 = ThemeModule;
    ThemeModule.forRoot = function () {
        return {
            ngModule: ThemeModule_1,
            providers: NB_THEME_PROVIDERS.slice(),
        };
    };
    ThemeModule = ThemeModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: BASE_MODULES.concat(NB_MODULES),
            exports: BASE_MODULES.concat(NB_MODULES, COMPONENTS, PIPES, DIRECTIVES),
            declarations: COMPONENTS.concat(PIPES, DIRECTIVES),
        })
    ], ThemeModule);
    return ThemeModule;
    var ThemeModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', loadChildren: 'app/pages/pages.module#PagesModule' },
];
var config = {
    useHash: false,
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(routes, config)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_current_user_service__ = __webpack_require__("../../../../../src/app/@core/services/current-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(currentUserService) {
        this.currentUserService = currentUserService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.currentUserService.populate();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-app',
            template: '<router-outlet></router-outlet>',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_current_user_service__["a" /* CurrentUserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("../../../../../src/app/@core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__theme_theme_module__["a" /* ThemeModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' },
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api_url: 'http://distsys.ch:8080/bookstore/api',
    mock: true,
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map