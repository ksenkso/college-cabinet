import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationIndexComponent } from './components/education-index/education-index.component';
import {EducationRoutingModule} from "./education-routing.module";

@NgModule({
  imports: [
    CommonModule,
    EducationRoutingModule
  ],
  declarations: [EducationIndexComponent]
})
export class EducationModule { }
