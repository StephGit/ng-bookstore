import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { ElectricityService } from './electricity.service';
import { StateService } from './state.service';
import { SmartTableService } from './smart-table.service';
import { PlayerService } from './player.service';
import {CatalogService} from './services/catalog.service';
import {ApiService} from './services/api.service';
import {CustomerService} from './services/customer.service';
import {NotificationService} from './services/notification.service';
import {CurrentUserService} from './services/current-user.service';
import {LogoutGuardService} from './services/logout-guard.service';
import {AuthGuardService} from './services/auth-guard.service';
import {ShoppingCartService} from './services/shopping-cart.service';

const SERVICES = [
  UserService,
  ElectricityService,
  StateService,
  SmartTableService,
  PlayerService,
  CatalogService,
  CustomerService,
  ApiService,
  NotificationService,
  CurrentUserService,
  ShoppingCartService,
  AuthGuardService,
  LogoutGuardService,
];

@NgModule({
  imports: [
    CommonModule,
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
