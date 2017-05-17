import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AuthService} from "./auth.service";

@Injectable()
export class ApiClientService {

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  get<T>(endpoint: string, errorHandler?: (reason: any) => any): Promise<T> {
    const headers: any = this.authService.getTokenAuthHeaders();

    if (!headers) return;

    return this.http.get(endpoint, {headers: headers})
      .toPromise()
      .then(response => response.json() as T)
      .catch(errorHandler ? errorHandler : ApiClientService.handleError);
  }

  post<T>(endpoint: string, body: any, errorHandler?: (reason: any) => any): Promise<T> {
    const headers: any = this.authService.getTokenAuthHeaders();

    if (!headers) return;

    return this.http
      .post(endpoint, body, {headers: headers})
      .toPromise()
      .then(response => response.json() as T)
      .catch(errorHandler ? errorHandler : ApiClientService.handleError);
  }

  put<T>(endpoint: string, id :number, body: any, errorHandler?: (reason: any) => any): Promise<T> {
    const headers: any = this.authService.getTokenAuthHeaders();

    if (!headers) return;

    return this.http
      .put(`${endpoint}/${id}`, body, {headers: headers})
      .toPromise()
      .then(response => response.json() as T)
      .catch(errorHandler ? errorHandler : ApiClientService.handleError);
  }

  remove<T>(endpoint: string, id: number | string, errorHandler?: (reason: any) => any): Promise<T> {
    const headers: any = this.authService.getTokenAuthHeaders();

    if (!headers) return;

    return this.http
      .delete(`${endpoint}/${id}`, {headers: headers})
      .toPromise()
      .then(response => response.json() as T)
      .catch(errorHandler ? errorHandler : ApiClientService.handleError);
  }

  static handleError(err: any) {
    console.error(err);
  }

}
