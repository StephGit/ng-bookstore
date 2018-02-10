import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AccountRoutingModule, routedComponents} from './account-routing.module';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ThemeModule} from '../../@theme/theme.module';


@NgModule({
  imports: [
    AccountRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ThemeModule,
  ],
  declarations: [
    ...routedComponents,
    LoginComponent,
    RegisterComponent,
  ],
})
export class AccountModule {
}
