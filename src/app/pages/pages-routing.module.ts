import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: '',
    component: DashboardComponent,
  }, {
    path: 'account',
    loadChildren: './account/account.module#AccountModule',
  }, {
    path: 'shopping-cart',
    loadChildren: './shopping-cart/shopping-cart.module#ShoppingCartModule',
  }, {
    path: 'checkout',
    loadChildren: './checkout/checkout.module#CheckoutModule',
  }, {
    path: 'details',
    loadChildren: './details/details.module#DetailsModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
