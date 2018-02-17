import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ReplaySubject} from 'rxjs/ReplaySubject';

import 'rxjs/add/operator/distinctUntilChanged';
import {User} from '../model/user.model';



@Injectable()
export class CurrentUserService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor (
  ) {}

  // This runs once on application startup.
  populate() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      this.setAuth(user);
    } else {
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  purgeAuth() {
    this.currentUserSubject.next(new User());
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('currentUser');
  }


  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }
}
