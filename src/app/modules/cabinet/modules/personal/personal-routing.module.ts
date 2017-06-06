/**
 * Created by yazun on 24.04.2017.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PersonalIndexComponent} from "./components/personal-index/personal-index.component";
import {PersonalFormComponent} from "./components/personal-form/personal-form.component";

const routes: Routes = [
  {
    path: '',
    component: PersonalIndexComponent,
  },
  {
    path: 'edit',
    component: PersonalFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
