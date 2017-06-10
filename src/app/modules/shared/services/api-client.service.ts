import { Injectable } from '@angular/core';
import {Http, Headers, ResponseContentType, Response} from "@angular/http";
import {AuthService} from "./auth.service";


@Injectable()
export class ApiClientService {

  apiURL = (window as any).apiURL;

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  private buildHeaders(headers: any): Promise<Headers> {
    const requestHeaders: Headers = this.authService.getTokenAuthHeaders();

    if (!requestHeaders.get('Authorization')) return Promise.reject(null);

    for (let key in headers) {
      if (headers.hasOwnProperty(key)) {
        requestHeaders.append(key, headers[key]);
      }
    }

    return Promise.resolve(requestHeaders)
  }

  getFile(endpoint: string, headers: any = {}): Promise<Response> {
    return this.buildHeaders(headers)
      .then((requestHeaders) => {
        return this.http.get(this.apiURL + endpoint, {headers: requestHeaders, responseType: ResponseContentType.Blob})
          .toPromise()
          .then(response => {
            return response;
          })
          .catch(ApiClientService.handleError);
      })

    //requestHeaders.append('Content-Type', 'blob');


  }

  get<T>(endpoint: string, headers: any = {}): Promise<T> {

    return this.buildHeaders(headers)
      .then((requestHeaders) => {
        return this.http.get(this.apiURL + endpoint, {headers: requestHeaders})
          .toPromise()
          .then(response => response.json() as T)
          .catch(ApiClientService.handleError);
      });
  }

  post<T>(endpoint: string, body: any, headers: any = {}): Promise<T> {

    return this.buildHeaders(headers)
      .then((requestHeaders) => {
        return this.http
          .post(this.apiURL + endpoint, body, {headers: requestHeaders})
          .toPromise()
          .then(response => response.json() as T)
          .catch(ApiClientService.handleError);
      });
  }

  put<T>(endpoint: string, id: number, body: any, headers: any = {}): Promise<T> {
    return this.buildHeaders(headers)
      .then((requestHeaders) => {
        return this.http
          .put(`${this.apiURL + endpoint}/${id}`, body, {headers: requestHeaders})
          .toPromise()
          .then(response => response.json() as T)
          .catch(ApiClientService.handleError);
      })

  }

  remove<T>(endpoint: string, id: number | string, headers: any = {}): Promise<T> {

    return this.buildHeaders(headers)
      .then((requestHeaders) => {

        return this.http
          .delete(`${this.apiURL + endpoint}/${id}`, {headers: requestHeaders})
          .toPromise()
          .then(response => response.json() as T)
          .catch(ApiClientService.handleError);
      });
  }

  static handleError(err: any) {
    console.error(err);
  }

}
