import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService} from './services/api.service';
import {AuthGuardService} from './services/auth-guard.service';
import {CatalogService} from './services/catalog.service';
import {CurrentUserService} from './services/current-user.service';
import {CustomerService} from './services/customer.service';
import {LogoutGuardService} from './services/logout-guard.service';
import {NotificationService} from './services/notification.service';
import {ShoppingCartService} from './services/shopping-cart.service';
import {StateService} from './state.service';
import {CreditcardYearDirective} from "./directives/creditcard-year-directive";

const SERVICES = [
  ApiService,
  AuthGuardService,
  CatalogService,
  CurrentUserService,
  CustomerService,
  LogoutGuardService,
  NotificationService,
  ShoppingCartService,
  StateService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CreditcardYearDirective,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
