import { Injectable } from '@angular/core';
import {MenuItem} from "../interfaces/menu-item";
import {Subject} from "rxjs";
import {ApiClientService} from "../modules/shared/services/api-client.service";

@Injectable()
export class MenuService {

  private endpoint = '/menu';
  private visible: Subject<boolean> = new Subject<boolean>();
  visible$ = this.visible.asObservable();

  constructor(
    private apiClient: ApiClientService
  ) {

  }

  toggle() {
    this.visible.next(true);
  }

  getMenu(): Promise<MenuItem[]> {

    return this.apiClient
      .get<MenuItem[]>(this.endpoint);

  }

  private static handleError(err) {
    console.error(err);
  }

}
