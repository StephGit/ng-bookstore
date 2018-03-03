import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
  selector: '[ngxValidateEqual][formControlName],[ngxValidateEqual][formControl],[ngxValidateEqual][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualDirective), multi: true },
  ],
})
export class EqualDirective implements Validator {
  constructor( @Attribute('ngxValidateEqual') public validateEqual: string) {}

  validate(c: AbstractControl): { [key: string]: any } {
    // self value (e.g. retype password)
    const v = c.value;

    // control value (e.g. password)
    const e = c.root.get(this.validateEqual);

    // value not equal
    if (e && v !== e.value) return {
      validateEqual: false,
    };
    return null;
  }
}
