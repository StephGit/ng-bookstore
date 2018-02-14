import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import {CheckoutComponent} from "./checkout.component";
import {CheckoutRoutingModule} from "./checkout.routing.module";


@NgModule({
  imports: [
    ThemeModule,
    CheckoutRoutingModule
  ],
  declarations: [
    CheckoutComponent
  ],
})
export class CheckoutModule { }
