/**
 * Created by yazun on 24.04.2017.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CalendarComponent} from "./components/calendar/calendar.component";
import {EventCreateComponent} from "./components/event-create/event-create.component";
import {CalendarPageComponent} from "./components/calendar-page/calendar-page.component";
import {EventEditComponent} from "./components/event-edit/event-edit.component";

const routes: Routes = [
  {
    path: '',
    component: CalendarPageComponent,
    children: [
      {
        path: '',
        component: CalendarComponent
      },
      {
        path: 'add-event',
        component: EventCreateComponent
      },
      {
        path: 'edit-event/:id',
        component: EventEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
