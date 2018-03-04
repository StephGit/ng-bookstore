import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import {BookRecommendationComponent} from './status-card/book-recommendation.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    DashboardComponent,
    BookRecommendationComponent,
  ],
})
export class DashboardModule { }
