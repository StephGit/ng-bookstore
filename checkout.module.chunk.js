webpackJsonp(["checkout.module"],{

/***/ "../../../../../src/app/pages/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card class=\"search-results\">\r\n  <nb-card-header>\r\n    Your Shopping Cart\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <table class=\"table\">\r\n          <thead>\r\n          <tr>\r\n            <th scope=\"col\">Title</th>\r\n            <th scope=\"col\">Price</th>\r\n            <th scope=\"col\">Quantity</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let item of currentShoppingCart.items\">\r\n            <td>{{item.book.title}}</td>\r\n            <td>{{item.book.price  | currency:'USD'}}</td>\r\n            <td>{{item.quantity}}</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n        <button class=\"btn btn-success\" (click)=\"placeOrder()\">Place Order</button>\r\n      </div>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/checkout/checkout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/@core/services/shopping-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.currentShoppingCart = this.shoppingCartService.getCurrentShoppingCart();
    };
    CheckoutComponent.prototype.placeOrder = function () {
    };
    CheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-checkout',
            template: __webpack_require__("../../../../../src/app/pages/checkout/checkout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/checkout/checkout.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_shopping_cart_service__["a" /* ShoppingCartService */]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/checkout/checkout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutModule", function() { return CheckoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_component__ = __webpack_require__("../../../../../src/app/pages/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_routing_module__ = __webpack_require__("../../../../../src/app/pages/checkout/checkout.routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckoutModule = /** @class */ (function () {
    function CheckoutModule() {
    }
    CheckoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_3__checkout_routing_module__["a" /* CheckoutRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkout_component__["a" /* CheckoutComponent */]
            ],
        })
    ], CheckoutModule);
    return CheckoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/checkout/checkout.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_component__ = __webpack_require__("../../../../../src/app/pages/checkout/checkout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__checkout_component__["a" /* CheckoutComponent */],
    }];
var CheckoutRoutingModule = /** @class */ (function () {
    function CheckoutRoutingModule() {
    }
    CheckoutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        })
    ], CheckoutRoutingModule);
    return CheckoutRoutingModule;
}());



/***/ })

});
//# sourceMappingURL=checkout.module.chunk.js.map