import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  private endpoint = 'http://api.journal.ru/v1/auth';
  redirtectUrl: string;

  constructor(
    private http: Http,
    private router: Router
  ) { }

  try(routeName: string): Promise<boolean>  {
    if (localStorage.getItem('user')) {
      const token = localStorage.getItem('token');
      return this.http
        .get(`${this.endpoint}/check/${routeName}`, {headers: new Headers({'X-Token': token})})
        .toPromise()
        .then(isValid => isValid.json() as boolean)
    } else {
      this.router.navigate(['/auth/login']);
      return Promise.resolve(false);
    }
  }

  getTokenAuthHeaders(): Headers|boolean {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);
      return headers;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }

  static getBasicAuthHeaders(username: string, password: string): Headers {
    const headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));
    return headers;
  }

  login(username: string, password: string): Promise<boolean|object> {
    return this.http
      .get(this.endpoint, {headers: AuthService.getBasicAuthHeaders(username, password)})
      .toPromise()
      .then(authResponse => {
        const authData = authResponse.json() as any;
        if (authData.access_token) {
          localStorage.setItem('user', JSON.stringify(authData));
          localStorage.setItem('token', authData.access_token);
          return true;
        }
      })
  }

}
