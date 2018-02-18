import {ControlContainer, NgForm} from '@angular/forms';
import {Directive} from '@angular/core';

@Directive({
  selector: '[ngxProvideParentForm]',
  providers: [
    {
      provide: ControlContainer,
      useFactory: function(form: NgForm) {
        return form;
      },
      deps: [NgForm],
    },
  ],
})
export class ProvideParentFormDirective {}
