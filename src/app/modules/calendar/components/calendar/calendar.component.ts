import {Component, OnInit, SkipSelf} from '@angular/core';
import {TitleService} from "../../../../services/title.service";
import {CalendarService} from "../../services/calendar.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  days: number;

  constructor(
    private titleService: TitleService,
    @SkipSelf() private calendarService: CalendarService
  ) {


  }

  ngOnInit() {
    this.titleService.setTitle('Календарь');
    this.calendarService
      .dayCount$
      .subscribe(dayCount => this.days = dayCount);
    this.calendarService.init();
  }

}
