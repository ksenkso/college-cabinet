import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarSelectComponent } from './components/calendar-select/calendar-select.component';
import { CalendarDayComponent } from './components/calendar-day/calendar-day.component';
import {CalendarService} from "./services/calendar.service";
import {EventsService} from "./services/events.service";
import {CalendarRoutingModule} from "./calendar-routing.module";
import {MonthPipe} from './pipes/month.pipe';
import { EventsComponent } from './components/events/events.component';

@NgModule({
  imports: [
    CommonModule,
    CalendarRoutingModule,
  ],
  declarations: [CalendarComponent, CalendarSelectComponent, CalendarDayComponent, MonthPipe, EventsComponent],
  providers: [CalendarService, EventsService]
})
export class CalendarModule { }

