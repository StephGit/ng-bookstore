import {Directive} from '@angular/core';
import {NG_VALIDATORS, Validator, ValidationErrors, AbstractControl} from '@angular/forms';


@Directive({
  selector: '[ngxCreditcardYear]',
  providers: [{provide: NG_VALIDATORS, useExisting: CreditcardYearDirective, multi: true}],
})
export class CreditcardYearDirective implements Validator {

  validate(c: AbstractControl): ValidationErrors {
    const numValue = Number(c.value);
    const currentYear = new Date().getFullYear();
    const maxYear = currentYear + 10;
    const isValid = !isNaN(numValue) && numValue >= currentYear && numValue <= maxYear;
    const message = {
      'years': {
        'message': 'The year must be a valid number between ' + currentYear + ' and ' + maxYear,
      },
    };
    return isValid ? null : message;
  }
}
