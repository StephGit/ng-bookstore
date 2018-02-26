import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
<<<<<<< HEAD
import {CheckoutComponent} from './checkout.component';
import {CheckoutRoutingModule} from './checkout.routing.module';
=======
import {CheckoutComponent} from "./checkout.component";
import {CheckoutRoutingModule} from "./checkout.routing.module";
import {OverviewComponent} from "../account/overview/overview.component";
import {AccountModule} from "../account/account.module";
>>>>>>> 5f206db7e105df036c06381287b8088a6085ec18


@NgModule({
  imports: [
    ThemeModule,
    CheckoutRoutingModule,
<<<<<<< HEAD
=======
    AccountModule
>>>>>>> 5f206db7e105df036c06381287b8088a6085ec18
  ],
  declarations: [
    CheckoutComponent,
  ],
})
export class CheckoutModule { }
