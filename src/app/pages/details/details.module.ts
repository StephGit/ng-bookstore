import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import {DetailsComponent} from './details.component';
import {DetailsRoutingModule} from './details-routing.module';


@NgModule({
  imports: [
    ThemeModule,
    DetailsRoutingModule,
  ],
  declarations: [
    DetailsComponent,
  ],
})
export class DetailsModule { }
