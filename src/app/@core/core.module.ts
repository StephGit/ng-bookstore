import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {AuthGuardService} from './services/auth-guard.service';
import {CatalogService} from './services/catalog.service';
import {CustomerService} from './services/customer.service';
import {ApiService} from './services/api.service';
import {LogoutGuardService} from './services/logout-guard.service';
import {NotificationService} from './services/notification.service';
import {ShoppingCartService} from './services/shopping-cart.service';
import {CurrentUserService} from './services/current-user.service';
import {HttpClientModule} from '@angular/common/http';
import {OrderService} from './services/order.service';
import {AdService} from './services/ad.service';
import {ErrorService} from './services/error.service';

const SERVICES = [
  AdService,
  ApiService,
  AuthGuardService,
  CatalogService,
  CurrentUserService,
  CustomerService,
  ErrorService,
  OrderService,
  LogoutGuardService,
  NotificationService,
  ShoppingCartService,
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ...SERVICES,
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
