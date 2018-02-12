import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AccountComponent} from './account.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LogoutComponent} from './logout/logout.component';
import {LogoutGuardService} from '../../@core/data/services/logout-guard.service';

const routes: Routes = [{
  path: '',
  component: AccountComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent,
    }, {
      path: 'register',
      component: RegisterComponent,
    }, {
      path: 'logout',
      component: LogoutComponent,
      canActivate: [LogoutGuardService],
    }, {
      path: '',
      component: LoginComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {
}

export const routedComponents = [
  AccountComponent,
  LoginComponent,
  LogoutComponent,
  RegisterComponent,
];
