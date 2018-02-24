webpackJsonp(["shopping-cart.module"],{

/***/ "../../../../../src/app/pages/shopping-cart/shopping-cart-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_cart_component__ = __webpack_require__("../../../../../src/app/pages/shopping-cart/shopping-cart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__shopping_cart_component__["a" /* ShoppingCartComponent */],
    }];
var ShoppingCartRoutingModule = /** @class */ (function () {
    function ShoppingCartRoutingModule() {
    }
    ShoppingCartRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        })
    ], ShoppingCartRoutingModule);
    return ShoppingCartRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card class=\"search-results\">\r\n  <nb-card-header>\r\n    Your Shopping Cart\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div class=\"row\">\r\n      <div class=\"list-group col-md-12\">\r\n        <div *ngFor=\"let i of currentShoppingCart.items\">\r\n          <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\r\n            <div class=\"wrapper\">\r\n              <div class=\"details col-md-4\">\r\n                <div class=\"title\">{{ i.book.title }}</div>\r\n                <div class=\"authors\">\r\n                  <div class=\"desc\">by {{ i.book.authors }}</div>\r\n                </div>\r\n                <div class=\"isbn\">\r\n                  <div class=\"desc\">{{ i.book.isbn }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"price  col-md-4\">\r\n                {{ i.book.price | currency:'USD'}}\r\n              </div>\r\n              <div class=\"selection  col-md-2\">\r\n\r\n                <select class=\"form-control quantity-selector\" name=\"quantity\" id=quantity\r\n                        [(ngModel)]=\"i.quantity\">\r\n                  <option *ngFor=\"let c of quantities\" [value]=\"c\">{{c}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n              <button type=\"button\" (click)=\"removeFromShoppingCart(i)\" class=\"btn btn-danger btn-icon\">\r\n                <i class=\"fa fa-trash\"></i>\r\n              </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 menu\" *ngIf=\"currentShoppingCart.items && currentShoppingCart.items.length > 0\">\r\n        <div class=\"totalprice\">Total price: {{ totalPrice | currency:'USD'}}</div>\r\n        <button class=\"btn btn-success checkout-btn\" (click)=\"navigateToCheckout()\">Checkout</button>\r\n      </div>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/shopping-cart/shopping-cart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .solar-card nb-card-header {\n  border: none;\n  padding-bottom: 0; }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) ngx-traffic {\n    display: none; } }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) /deep/ nb-card.large-card {\n    height: 456px; } }\n\n:host-context(.nb-theme-default) .search-results {\n  padding: 0; }\n\n:host-context(.nb-theme-default) .carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ff0000' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\");\n  color: black; }\n\n:host-context(.nb-theme-default) a {\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n:host-context(.nb-theme-default) .quantity {\n  color: #2a2a2a;\n  font-family: Exo;\n  font-size: 4rem;\n  font-weight: 500; }\n\n:host-context(.nb-theme-default) .menu {\n  margin-top: 20px; }\n\n:host-context(.nb-theme-default) .list-group-item:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n:host-context(.nb-theme-default) .wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-default) .quantity-selector {\n  width: 100px; }\n\n:host-context(.nb-theme-default) .btn-icon {\n  max-width: 70px;\n  float: right; }\n\n:host-context(.nb-theme-default) .checkout-btn {\n  margin-top: 2em; }\n\n:host-context(.nb-theme-default) .totalprice {\n  font-size: 1.2em; }\n\n:host-context(.nb-theme-default) .title {\n  font-size: 1.3em; }\n\n:host-context(.nb-theme-cosmic) .solar-card nb-card-header {\n  border: none;\n  padding-bottom: 0; }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) ngx-traffic {\n    display: none; } }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) /deep/ nb-card.large-card {\n    height: 456px; } }\n\n:host-context(.nb-theme-cosmic) .search-results {\n  padding: 0; }\n\n:host-context(.nb-theme-cosmic) .carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ff0000' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\");\n  color: black; }\n\n:host-context(.nb-theme-cosmic) a {\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n:host-context(.nb-theme-cosmic) .quantity {\n  color: #ffffff;\n  font-family: Exo;\n  font-size: 4rem;\n  font-weight: 500; }\n\n:host-context(.nb-theme-cosmic) .menu {\n  margin-top: 20px; }\n\n:host-context(.nb-theme-cosmic) .list-group-item:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n:host-context(.nb-theme-cosmic) .wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-cosmic) .quantity-selector {\n  width: 100px; }\n\n:host-context(.nb-theme-cosmic) .btn-icon {\n  max-width: 70px;\n  float: right; }\n\n:host-context(.nb-theme-cosmic) .checkout-btn {\n  margin-top: 2em; }\n\n:host-context(.nb-theme-cosmic) .totalprice {\n  font-size: 1.2em; }\n\n:host-context(.nb-theme-cosmic) .title {\n  font-size: 1.3em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/@core/services/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(shoppingCartService, router) {
        this.shoppingCartService = shoppingCartService;
        this.router = router;
        this.quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    Object.defineProperty(ShoppingCartComponent.prototype, "totalPrice", {
        get: function () { return this.currentShoppingCart.getTotalPrice(); },
        enumerable: true,
        configurable: true
    });
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.currentShoppingCart = this.shoppingCartService.getCurrentShoppingCart();
    };
    ShoppingCartComponent.prototype.removeFromShoppingCart = function (item) {
        this.shoppingCartService.removeItemFromShoppingCart(item);
        this.currentShoppingCart = this.shoppingCartService.getCurrentShoppingCart();
    };
    ShoppingCartComponent.prototype.navigateToCheckout = function () {
        this.router.navigate(['/checkout']);
    };
    ShoppingCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-shopping-cart',
            template: __webpack_require__("../../../../../src/app/pages/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/shopping-cart/shopping-cart.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_shopping_cart_service__["a" /* ShoppingCartService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/shopping-cart/shopping-cart.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartModule", function() { return ShoppingCartModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_cart_component__ = __webpack_require__("../../../../../src/app/pages/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_cart_routing_module__ = __webpack_require__("../../../../../src/app/pages/shopping-cart/shopping-cart-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ShoppingCartModule = /** @class */ (function () {
    function ShoppingCartModule() {
    }
    ShoppingCartModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_3__shopping_cart_routing_module__["a" /* ShoppingCartRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shopping_cart_component__["a" /* ShoppingCartComponent */]
            ],
        })
    ], ShoppingCartModule);
    return ShoppingCartModule;
}());



/***/ })

});
//# sourceMappingURL=shopping-cart.module.chunk.js.map