import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';

@Injectable()
export class NotificationService {
  private subject = new Subject<any>();
  nId = 0;

  set(notification: any): any {
    notification.id = this.nId;
    this.subject.next(notification);
    this.nId++;
    return notification;
  };

  success(message: string, title: string) {
    this.set({type: 'success', text: message, title: title});
  }

  error(message: string, title: string) {
    this.set({type: 'error', text: message, title: title});
  }

  info(message: string, title: string) {
    this.set({type: 'info', text: message, title: title});
  }

  warning(message: string, title: string) {
    this.set({type: 'warning', text: message, title: title});
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
