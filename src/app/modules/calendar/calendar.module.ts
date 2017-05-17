import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarControlComponent } from './components/calendar-control/calendar-control.component';
import { CalendarDayComponent } from './components/calendar-day/calendar-day.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalendarComponent, CalendarControlComponent, CalendarDayComponent]
})
export class CalendarModule { }
