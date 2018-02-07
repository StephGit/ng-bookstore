import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AccountRoutingModule, routedComponents} from './account-routing.module';


@NgModule({
  imports: [
    AccountRoutingModule,
  ],
  declarations: [
    ...routedComponents,
    LoginComponent,
    RegisterComponent,
  ],
})
export class AccountModule {
}
