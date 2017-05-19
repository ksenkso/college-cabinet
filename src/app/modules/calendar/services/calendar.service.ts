import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Subject, Observable, BehaviorSubject} from "rxjs";
import {isNumber} from "util";

@Injectable()
export class CalendarService {

  private date: Date = new Date();
  private day: BehaviorSubject<number> = new BehaviorSubject<number>(this.date.getDate());
  private month: BehaviorSubject<number> = new BehaviorSubject<number>(this.date.getMonth());
  private year: BehaviorSubject<number> = new BehaviorSubject<number>(this.date.getFullYear());
  private offset: Subject<number> = new Subject<number>();
  private dayCount: Subject<number> = new Subject<number>();
  private selected: Subject<number> = new Subject<number>();

  day$ = this.day.asObservable();
  month$ = this.month.asObservable();
  year$ = this.year.asObservable();
  offset$ = this.offset.asObservable();
  dayCount$ = this.dayCount.asObservable();
  selected$ = this.selected.asObservable();

  constructor() {
    this.init();

  }

  init() {
    console.log('new instance');

    const d = this.date.getDate();
    console.log(d);
    this.day.next(d);
    this.month.next(this.date.getMonth());
    this.year.next(this.date.getFullYear());

    this.offset.next(CalendarService.getOffset(this.date.getFullYear(), this.date.getMonth()));
    this.dayCount.next(CalendarService.getDaysCount(this.date.getFullYear(), this.date.getMonth()));
    this.select(this.day.getValue());
  }

  static getDaysCount(year: number, month: number): number {
    console.log('dayCount');
    return new Date(year, month+1, 0).getDate();
  }

  static getOffset(year: number, month: number): number {

    const offset = 7 - (7 - (new Date(year, month, 1)).getDay());
    console.log(offset);
    return offset - 1;

  }


  getDefault(prop: string): number {
    switch (prop) {
      case 'day': {
        return this.date.getDate();
      }
      case 'month': {
        return this.date.getMonth();
      }
      case 'year': {
        return this.date.getFullYear();
      }
    }
  }

  setProp(key, value) {
    switch (key) {
      case 'day': {
        this.setDay(value);break;
      }
      case 'month': {
        if (value > 11) {
          this.setYear(this.year.getValue()+1);
          this.setMonth(0);
          return;
        }
        if (value < 0) {
          this.setYear(this.year.getValue()-1);
          this.setMonth(11);
          return;
        }
        this.setMonth(value);
        break;
      }
      case 'year': {
        this.setYear(value);break;
      }
    }
  }

  private setDay(day: number): void {
    this.day.next(day);
  }

  private setMonth(month: number): void {
    this.dayCount.next(CalendarService.getDaysCount(this.year.getValue(), month));
    this.offset.next(CalendarService.getOffset(this.year.getValue(), month));
    this.month.next(month);
  }

  private setYear(year: number): void {
    this.dayCount.next(CalendarService.getDaysCount(year, this.month.getValue()));
    this.offset.next(CalendarService.getOffset(this.month.getValue(), year));
    this.year.next(year);
  }

  select(num: number) {
    console.log('selected day: ', num);

    this.selected.next(num);
  }
}
