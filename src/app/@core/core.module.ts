import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {AdService} from './services/ad.service';
import {ApiService} from './services/api.service';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthInterceptorService} from './services/auth-interceptor.service';
import {CatalogService} from './services/catalog.service';
import {CurrentUserService} from './services/current-user.service';
import {CustomerService} from './services/customer.service';
import {ErrorService} from './services/error.service';
import {LogoutGuardService} from './services/logout-guard.service';
import {NotificationService} from './services/notification.service';
import {OrderService} from './services/order.service';
import {ShoppingCartService} from './services/shopping-cart.service';


const SERVICES = [
  AdService,
  ApiService,
  AuthGuardService,
  CatalogService,
  CurrentUserService,
  CustomerService,
  ErrorService,
  LogoutGuardService,
  NotificationService,
  OrderService,
  ShoppingCartService,
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ...SERVICES,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
  ],
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
