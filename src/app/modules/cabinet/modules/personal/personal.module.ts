import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalIndexComponent } from './components/personal-index/personal-index.component';
import {RouterModule} from "@angular/router";
import {PersonalRoutingModule} from "./personal-routing.module";
import { PersonalFormComponent } from './components/personal-form/personal-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    PersonalRoutingModule
  ],
  declarations: [PersonalIndexComponent, PersonalFormComponent]
})
export class PersonalModule { }
