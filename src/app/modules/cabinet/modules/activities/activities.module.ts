import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesIndexComponent } from './components/activities-index/activities-index.component';
import {RouterModule} from "@angular/router";
import {ActivitiesRoutingModule} from "./activities-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ActivitiesRoutingModule
  ],
  declarations: [ActivitiesIndexComponent]
})
export class ActivitiesModule { }
