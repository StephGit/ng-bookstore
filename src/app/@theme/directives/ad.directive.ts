import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxAdHost]',
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
