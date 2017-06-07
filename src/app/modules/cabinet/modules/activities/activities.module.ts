import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesIndexComponent } from './components/activities-index/activities-index.component';
import {RouterModule} from "@angular/router";
import {ActivitiesRoutingModule} from "./activities-routing.module";
import { ActivitiesOverviewComponent } from './components/activities-overview/activities-overview.component';
import { ActivityFormComponent } from './components/activity-form/activity-form.component';
import { ActivityVisitsComponent } from './components/activity-visits/activity-visits.component';
import { ActivityEmploymentComponent } from './components/activity-employment/activity-employment.component';
import { ActivityOutEmploymentComponent } from './components/activity-out-employment/activity-out-employment.component';

@NgModule({
  imports: [
    CommonModule,
    ActivitiesRoutingModule
  ],
  declarations: [ActivitiesIndexComponent, ActivitiesOverviewComponent, ActivityFormComponent, ActivityVisitsComponent, ActivityEmploymentComponent, ActivityOutEmploymentComponent]
})
export class ActivitiesModule { }
