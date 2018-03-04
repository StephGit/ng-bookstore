import {Attribute, Directive} from '@angular/core';
import {NG_VALIDATORS, Validator, ValidationErrors, AbstractControl} from '@angular/forms';


@Directive({
  selector: '[ngxCreditcardMonth]',
  providers: [{provide: NG_VALIDATORS, useExisting: CreditcardMonthDirective, multi: true}],
})
export class CreditcardMonthDirective implements Validator {
  constructor( @Attribute('ngxCreditcardMonth') public validateYear: string) {}

  validate(c: AbstractControl): ValidationErrors {
    const numValue = Number(c.value);
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const yearControl = c.root.get(this.validateYear);
    const year = (yearControl !== undefined && yearControl !== null) ? yearControl.value : 0;
    const isValid = !isNaN(numValue) &&
      (year > currentYear || (year === currentYear && numValue >= currentMonth) || year === 0 || year === undefined);
    const message = {
      'month': {
        'message': 'The value is expired. It must be a valid number between ' + currentMonth + ' and ' + 12,
      },
    };
    return isValid ? null : message;
  }
}
