import {EventEmitter, Injectable} from '@angular/core';
import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// Observable class extensions
import 'rxjs/add/observable/throw';
import {NotificationService} from './notification.service';


@Injectable()
export class ApiService {
  apiUrl = `${environment.api_url}`;
  headers: HttpHeaders;

  constructor(private http: HttpClient,
              private notificationService: NotificationService) {
  }

  private getDefaultHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    })
  }

  private setHeaders(headers: HttpHeaders): HttpHeaders {
    if (headers !== null) {
      return this.headers = headers;
    } else {
      return this.headers = this.getDefaultHeaders();
    }
  }

  protected handleError(error: any) {
    if (error instanceof Response || error.status === 0) {
      this.notificationService.error('No internet connection/ backend connection available.', 'Connection error');
      return Observable.throw(error);
    }
    return Observable.throw(error);
  }


  get(path: string, params: HttpParams = new HttpParams(), headers: HttpHeaders): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}`, {headers: this.setHeaders(headers), params: params})
      .catch((error) => this.handleError(error))
  }

  put(path: string, body: Object = {}, headers: HttpHeaders): Observable<any> {
    return this.http.put(
      `${this.apiUrl}${path}`,
      JSON.stringify(body),
      {headers: this.setHeaders(headers)},
    )
      .catch((error) => this.handleError(error))
  }

  post(path: string, body: Object = {}, headers: HttpHeaders): Observable<any> {
    return this.http.post(
      `${this.apiUrl}${path}`,
      JSON.stringify(body),
      {headers: this.setHeaders(headers)},
    )
      .catch((error) => this.handleError(error))
  }

  delete(path, headers): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}${path}`,
      {headers: this.setHeaders(headers)},
    )
      .catch((error) => this.handleError(error))
  }
}
