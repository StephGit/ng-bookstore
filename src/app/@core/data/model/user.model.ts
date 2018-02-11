import {UserGroup} from './user-group.model';

export class User {
  email: string;
  password: string;
  confirmPassword: string;
  userGroup: UserGroup;
  // constructor(email: string, password: string) {
  //   this.email = email;
  //   this.password = password;
  // };
}
