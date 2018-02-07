import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../../environments/environment';

@Injectable()
export class ApiService {
  apiUrl = `${environment.api_url}`;
  headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {}

  private getDefaultHeaders(): HttpHeaders {
   return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  private setHeaders(headers: HttpHeaders): HttpHeaders {
    if (headers !== null ) {
      return this.headers = headers;
    } else {
      return this.headers = this.getDefaultHeaders();
    }
  }

  private  extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  protected formatErrors(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json() || 'No internet connection/ backend connection available.');
    }
    return Observable.throw(error.json());
  }


  get(path: string, params: HttpParams = new HttpParams(), headers: HttpHeaders ): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}`, {headers: this.setHeaders(headers), params: params})
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  put(path: string, body: Object = {}, headers: HttpHeaders ): Observable<any> {
    return this.http.put(
      `${this.apiUrl}${path}`,
      JSON.stringify(body),
      {headers: this.setHeaders(headers)}
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  post(path: string, body: Object = {}, headers: HttpHeaders ): Observable<any> {
    return this.http.post(
      `${this.apiUrl}${path}`,
      JSON.stringify(body),
      {headers: this.setHeaders(headers)}
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  delete(path, headers): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}${path}`,
      {headers: this.setHeaders(headers)}
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }
}
