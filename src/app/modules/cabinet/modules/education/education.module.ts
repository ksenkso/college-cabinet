import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationIndexComponent } from './components/education-index/education-index.component';
import {EducationRoutingModule} from "./education-routing.module";
import { EducationPlanComponent } from './components/education-plan/education-plan.component';
import { EducationPlanPartComponent } from './components/education-plan-part/education-plan-part.component';
import { EducationBreedingComponent } from './components/education-breeding/education-breeding.component';
import { EducationPsychoComponent } from './components/education-psycho/education-psycho.component';
import { EducationParentsComponent } from './components/education-parents/education-parents.component';

@NgModule({
  imports: [
    CommonModule,
    EducationRoutingModule
  ],
  declarations: [EducationIndexComponent, EducationPlanComponent, EducationPlanPartComponent, EducationBreedingComponent, EducationPsychoComponent, EducationParentsComponent]
})
export class EducationModule { }
