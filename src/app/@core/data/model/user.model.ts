import {UserGroup} from './user-group.model';

export class User {
  id: number;
  email: string;
  password: string;
  confirmPassword: string;
  userGroup: UserGroup;
  constructor( id: number = -1, email: string = '') {
    this.id = id;
    this.email = email.trim();
  }
}
