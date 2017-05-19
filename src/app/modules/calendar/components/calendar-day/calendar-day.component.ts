import {Component, Input, OnInit} from '@angular/core';
import {CalendarService} from "../../services/calendar.service";

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css']
})
export class CalendarDayComponent implements OnInit {

  @Input()
  dayCount: number;

  offset: Array<any>;

  selected: number|null;

  get days(): Array<any> {
    const days = [];
    const dc = this.dayCount;
    for (let i = 0; i < dc; i++) {
      days.push(i);
    }
    return days;
  }

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.calendarService
      .offset$
      .subscribe(newOffset => this.offset = Array(newOffset));

    this.calendarService
      .selected$
      .subscribe(selected => this.selected = selected);
  }

  select(num: number) {

    this.calendarService.select(num)
  }

}
