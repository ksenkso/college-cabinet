/**
 * Created by yazun on 24.04.2017.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EducationIndexComponent} from "./components/education-index/education-index.component";
import {EducationPlanComponent} from "./components/education-plan/education-plan.component";
import {EducationBreedingComponent} from "./components/education-breeding/education-breeding.component";
import {EducationPsychoComponent} from "./components/education-psycho/education-psycho.component";
import {EducationParentsComponent} from "./components/education-parents/education-parents.component";

const routes: Routes = [
  {
    path: '',
    component: EducationIndexComponent,
    children: [
      {
        path: '',
        component: EducationPlanComponent
      },
      {
        path: 'breeding',
        component: EducationBreedingComponent
      },
      {
        path: 'psychologist',
        component: EducationPsychoComponent
      },
      {
        path: 'parents',
        component: EducationParentsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule { }
