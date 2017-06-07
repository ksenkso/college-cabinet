import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class RouteParamsService {

  private values: BehaviorSubject<any> = new BehaviorSubject<any>({});
  values$: Observable<any> = this.values.asObservable();

  constructor() { }

  set(key: string, value: any) {
    let values = this.values.value;
    values[key] = value;
    this.values.next(values);
  }

  get(key: string): any {
    return this.values[key];
  }

}
