/**
 * Created by yazun on 24.04.2017.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ActivitiesIndexComponent} from "./components/activities-index/activities-index.component";
import {ActivitiesOverviewComponent} from "./components/activities-overview/activities-overview.component";
import {ActivityFormComponent} from "./components/activity-form/activity-form.component";
import {ActivityVisitsComponent} from "./components/activity-visits/activity-visits.component";
import {ActivityEmploymentComponent} from "./components/activity-employment/activity-employment.component";
import {ActivityOutEmploymentComponent} from "./components/activity-out-employment/activity-out-employment.component";

const routes: Routes = [
  {
    path: '',
    component: ActivitiesIndexComponent,
    children: [
      {
        path: '',
        component: ActivitiesOverviewComponent
      },
      {
        path: 'edit-activity',
        component: ActivityFormComponent
      },
      {
        path: 'visits',
        component: ActivityVisitsComponent
      },
      {
        path: 'employment',
        component: ActivityEmploymentComponent
      },
      {
        path: 'out-employment',
        component: ActivityOutEmploymentComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
