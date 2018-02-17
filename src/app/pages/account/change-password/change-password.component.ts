import {Component, Input} from '@angular/core';
import {User} from '../../../@core/model/user.model';

@Component({
  selector: 'ngx-change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {

  constructor() { }
  @Input() user: User;
}
