import { Injectable } from '@angular/core';
import {MenuItem} from "../interfaces/menu-item";
import {Subject} from "rxjs";
import {ApiClientService} from "../modules/shared/services/api-client.service";
import {Http, Response, ResponseContentType} from "@angular/http";
import {AuthService} from "../modules/shared/services/auth.service";

@Injectable()
export class MenuService {

  private endpoint = '/menu';
  private visible: Subject<boolean> = new Subject<boolean>();
  visible$ = this.visible.asObservable();

  constructor(
    private authService: AuthService,
    private http: Http,
    private apiClient: ApiClientService
  ) {

  }

  toggle() {
    this.visible.next(true);
  }

  getMenu(): Promise<MenuItem[]> {

    this.http
      .get(this.apiClient.apiURL + '/document', {headers: this.authService.getTokenAuthHeaders(), responseType: ResponseContentType.Blob})
      .toPromise()
      .then((response: Response) => {
        const blob = (<any>response)._body;
        const link=document.createElement('a');
        link.href=window.URL.createObjectURL(blob);
        link.download="test.docx";
        link.click();

      });

    return this.apiClient
      .get<MenuItem[]>(this.endpoint);

  }

}
