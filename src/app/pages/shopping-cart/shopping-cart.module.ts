import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import {ShoppingCartComponent} from './shopping-cart.component';
import {ShoppingCartRoutingModule} from './shopping-cart-routing.module';


@NgModule({
  imports: [
    ThemeModule,
    ShoppingCartRoutingModule,
  ],
  declarations: [
    ShoppingCartComponent,
  ],
})
export class ShoppingCartModule { }
