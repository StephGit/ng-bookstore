import {Attribute, Directive} from '@angular/core';
import {NG_VALIDATORS, Validator, ValidationErrors, AbstractControl} from '@angular/forms';


@Directive({
  selector: '[ngxCreditcardYear]',
  providers: [{provide: NG_VALIDATORS, useExisting: CreditcardYearDirective, multi: true}],
})
export class CreditcardYearDirective implements Validator {
  constructor( @Attribute('ngxCreditcardYear') public validateMonth: string) {}

  validate(c: AbstractControl): ValidationErrors {
    const value = Number(c.value);
    const currentYear = new Date().getFullYear();
    const maxYear = currentYear + 10;
    const currentMonth = new Date().getMonth() + 1;
    const monthControl = c.root.get(this.validateMonth);
    const month = monthControl !== null ? monthControl.value : 0;

    let isValid = !isNaN(value) && value >= currentYear && value <= maxYear;
    const message = {
      'years': {
        'message': 'The year must be a valid number between ' + currentYear + ' and ' + maxYear,
      },
    };
    if (value === currentYear && month < currentMonth) {
      isValid = false;
      message.years.message = 'The expiration year and month is expired';
    }
    return isValid ? null : message;
  }
}

