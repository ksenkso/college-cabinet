import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarSelectComponent } from './components/calendar-select/calendar-select.component';
import { CalendarDayComponent } from './components/calendar-day/calendar-day.component';
import {CalendarService} from "./services/calendar.service";
import {EventsService} from "./services/events.service";
import {CalendarRoutingModule} from "./calendar-routing.module";
import {MonthPipe} from './pipes/month.pipe';
import {EventsComponent} from "./components/events/events.component";
import { EventComponent } from './components/event/event.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CalendarPageComponent } from './components/calendar-page/calendar-page.component';
import { EventEditComponent } from './components/event-edit/event-edit.component';


@NgModule({
  imports: [
    CommonModule,
    CalendarRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CalendarComponent, CalendarSelectComponent, CalendarDayComponent, MonthPipe, EventsComponent, EventComponent, EventFormComponent, EventCreateComponent, CalendarPageComponent, EventEditComponent],
  providers: [CalendarService, EventsService]
})
export class CalendarModule { }

