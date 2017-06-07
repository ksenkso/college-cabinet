/**
 * Created by yazun on 24.04.2017.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CabinetIndexComponent} from "./components/cabinet-index/cabinet-index.component";

const routes: Routes = [
  {
    path: '',
    component: CabinetIndexComponent,
    data: ['activities'],
    children: [
      {
        path: 'activities',
        loadChildren: './modules/activities/activities.module#ActivitiesModule',
      },
      {
        path: 'personal',
        loadChildren: './modules/personal/personal.module#PersonalModule',
        data: ['personal']
      },
      {
        path: 'collective',
        loadChildren: './modules/collective/collective.module#CollectiveModule',
        data: ['collective']
      },
      {
        path: 'education',
        loadChildren: './modules/education/education.module#EducationModule',
        data: ['collective']
      },
      {
        path: 'parents',
        loadChildren: './modules/parents/parents.module#ParentsModule',
        data: ['collective']
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CabinetRoutingModule { }
