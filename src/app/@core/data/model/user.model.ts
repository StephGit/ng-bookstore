import {UserGroup} from './user-group.model';

export class User {
  username: string;
  password: string;
  userGroup: UserGroup;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  };
}
