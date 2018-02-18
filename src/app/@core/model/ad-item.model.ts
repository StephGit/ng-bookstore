import { Type } from '@angular/core';
import {Customer} from './customer.model';
import {User} from './user.model';

export class AdItem {
  constructor(public component: Type<any>, public title: string, public user: User, public customer: Customer) {}
}
