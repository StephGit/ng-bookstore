import {UserGroup} from './user-group.model';

export class User {
  id: number;
  email: string;
  password: string;
  confirmPassword: string;
  userGroup: UserGroup;
  constructor( id?: number, email?: string, password?: string, confirmPassword?: string, userGroup?: UserGroup) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.userGroup = userGroup;
  }
}
