import { Injectable } from '@angular/core';
import {Http, Headers, ResponseContentType, Response} from "@angular/http";
import {AuthService} from "./auth.service";

@Injectable()
export class ApiClientService {

  apiURL = 'http://api.journal.ru/v1';

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  getFile(endpoint: string, headers: any = {}): Promise<Response> {
    const requestHeaders: Headers = this.authService.getTokenAuthHeaders();

    if (!requestHeaders.get('Authorization')) return;

    for (let key in headers) {
      if (headers.hasOwnProperty(key)) {
        requestHeaders.append(key, headers[key]);
      }
    }

    //requestHeaders.append('Content-Type', 'blob');

    return this.http.get(this.apiURL + endpoint, {headers: requestHeaders, responseType: ResponseContentType.Blob})
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(ApiClientService.handleError);
  }

  get<T>(endpoint: string, headers: any = {}): Promise<T> {
    const requestHeaders: Headers = this.authService.getTokenAuthHeaders();

    if (!requestHeaders.get('Authorization')) return;

    for (let key in headers) {
      if (headers.hasOwnProperty(key)) {
        requestHeaders.append(key, headers[key]);
      }
    }

    return this.http.get(this.apiURL + endpoint, {headers: requestHeaders})
      .toPromise()
      .then(response => response.json() as T)
      .catch(ApiClientService.handleError);
  }

  post<T>(endpoint: string, body: any, headers: any = {}): Promise<T> {
    const requestHeaders: Headers = this.authService.getTokenAuthHeaders();

    if (!requestHeaders.get('Authorization')) return;

    for (let key in headers) {
      if (headers.hasOwnProperty(key)) {
        requestHeaders.append(key, headers[key]);
      }
    }

    return this.http
      .post(this.apiURL + endpoint, body, {headers: requestHeaders})
      .toPromise()
      .then(response => response.json() as T)
      .catch(ApiClientService.handleError);
  }

  put<T>(endpoint: string, id: number, body: any, headers: any = {}): Promise<T> {
    const requestHeaders: Headers = this.authService.getTokenAuthHeaders();

    if (!requestHeaders.get('Authorization')) return;

    for (let key in headers) {
      if (headers.hasOwnProperty(key)) {
        requestHeaders.append(key, headers[key]);
      }
    }

    return this.http
      .put(`${this.apiURL + endpoint}/${id}`, body, {headers: requestHeaders})
      .toPromise()
      .then(response => response.json() as T)
      .catch(ApiClientService.handleError);
  }

  remove<T>(endpoint: string, id: number | string, headers: any = {}): Promise<T> {
    const requestHeaders: Headers = this.authService.getTokenAuthHeaders();

    if (!requestHeaders.get('Authorization')) return;

    for (let key in headers) {
      if (headers.hasOwnProperty(key)) {
        requestHeaders.append(key, headers[key]);
      }
    }

    return this.http
      .delete(`${this.apiURL + endpoint}/${id}`, {headers: requestHeaders})
      .toPromise()
      .then(response => response.json() as T)
      .catch(ApiClientService.handleError);
  }

  static handleError(err: any) {
    console.error(err);
  }

}
