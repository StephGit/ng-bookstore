import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import {CheckoutComponent} from "./checkout.component";
import {CheckoutRoutingModule} from "./checkout.routing.module";
import {OverviewComponent} from "../account/overview/overview.component";
import {AccountModule} from "../account/account.module";


@NgModule({
  imports: [
    ThemeModule,
    CheckoutRoutingModule,
    AccountModule
  ],
  declarations: [
    CheckoutComponent
  ],
})
export class CheckoutModule { }
