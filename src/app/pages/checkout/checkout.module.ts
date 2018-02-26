import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import {CheckoutComponent} from './checkout.component';
import {CheckoutRoutingModule} from './checkout.routing.module';
import {AccountModule} from '../account/account.module';


@NgModule({
  imports: [
    ThemeModule,
    CheckoutRoutingModule,
    AccountModule,
  ],
  declarations: [
    CheckoutComponent,
  ],
})
export class CheckoutModule { }
