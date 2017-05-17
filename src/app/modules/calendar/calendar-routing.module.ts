import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CalendarService} from "./services/calendar.service";
import {CalendarComponent} from "./components/calendar/calendar.component";

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [CalendarService],
  exports: [RouterModule]
})
export class CalendarModule { }
