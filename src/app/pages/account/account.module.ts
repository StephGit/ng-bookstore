import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AccountRoutingModule, routedComponents} from './account-routing.module';
import {RouterModule} from '@angular/router';
import {ThemeModule} from '../../@theme/theme.module';
import { LogoutComponent } from './logout/logout.component';
import {CoreModule} from '../../@core/core.module';


@NgModule({
  imports: [
    AccountRoutingModule,
    RouterModule,
    ThemeModule,
  ],
  declarations: [
    ...routedComponents,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
  ],
  exports: [
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
  ],
})
export class AccountModule {
}
