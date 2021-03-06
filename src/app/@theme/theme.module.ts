import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  NbActionsModule,
  NbCardModule,
  NbLayoutModule,
  NbSearchModule,
  NbThemeModule,
  NbUserModule,
  } from '@nebular/theme';

import {
  AddressDataViewComponent,
  BookListComponent,
  ChangeAddressDataComponent, ChangeContactDataComponent,
  ChangePasswordComponent,
  ChangePaymentDataComponent,
  ChangeUserDataComponent,
  FooterComponent,
  HeaderComponent,
  PaymentDataViewComponent,
  SearchInputComponent,
  ShoppingCartAddButtonComponent,
} from './components';

import { CapitalizePipe, PluralPipe, RoundPipe, TimingPipe } from './pipes';
import { LayoutComponent} from './layout';
import { ToasterModule } from 'angular2-toaster';
import {
  AdDirective, CreditcardMonthDirective, CreditcardYearDirective, EqualDirective,
  ProvideParentFormDirective,
} from './directives';
import {PrettifyAuthorsPipe} from './pipes/prettify-authors.pipe';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule, ToasterModule];

const NB_MODULES = [
  NbCardModule,
  NbLayoutModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NgbModule,
];

const COMPONENTS = [
  AddressDataViewComponent,
  BookListComponent,
  FooterComponent,
  ChangeUserDataComponent,
  ChangeAddressDataComponent,
  ChangeContactDataComponent,
  ChangePaymentDataComponent,
  ChangePasswordComponent,
  HeaderComponent,
  LayoutComponent,
  PaymentDataViewComponent,
  SearchInputComponent,
  ShoppingCartAddButtonComponent,
];

const PIPES = [
  CapitalizePipe,
  PrettifyAuthorsPipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
];

const DIRECTIVES = [
  AdDirective,
  CreditcardMonthDirective,
  CreditcardYearDirective,
  EqualDirective,
  ProvideParentFormDirective,
];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot(
    {
      name: 'default',
    },
  ).providers,
];

@NgModule({
  imports: [...BASE_MODULES, ...NB_MODULES],
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS, ...PIPES, ...DIRECTIVES],
  declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS],
    };
  }
}
