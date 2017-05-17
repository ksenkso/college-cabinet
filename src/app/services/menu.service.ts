import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import {MenuItem} from "../interfaces/menu-item";
import {Subject} from "rxjs";
import {ApiClientService} from "../modules/shared/services/api-client.service";

@Injectable()
export class MenuService {

  private endpoint = 'http://api.journal.ru/v1/menu';
  private visible: Subject<boolean> = new Subject<boolean>();
  visible$ = this.visible.asObservable();

  constructor(
    private http: Http,
    private apiClient: ApiClientService
  ) {

  }

  toggle() {
    this.visible.next(true);
  }

  getMenu(): Promise<MenuItem[]> {

    return this.apiClient
      .get<MenuItem[]>(this.endpoint, MenuService.handleError.bind(this));

  }

  private static handleError(err) {
    console.error(err);
  }

}
