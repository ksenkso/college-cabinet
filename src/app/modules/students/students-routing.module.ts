/**
 * Created by yazun on 22.04.2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {StudentFormComponent} from "./components/student-form/student-form.component";
import {StudentsComponent} from "./components/students/students.component";
import {StudentListComponent} from "./components/student-list/student-list.component";
import {StudentParentsComponent} from "./components/student-parents/student-parents.component";
import {StudentActivityComponent} from "./components/student-activity/student-activity.component";
import {StudentOutActivityComponent} from "./components/student-out-activity/student-out-activity.component";
import {StudentEditComponent} from "./components/student-edit/student-edit.component";
import {StudentHealthComponent} from "./components/student-health/student-health.component";
import {StudentBreedingComponent} from "./components/student-breeding/student-breeding.component";
import {StudentFamilyComponent} from "./components/student-family/student-family.component";

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [
      {
        path: '',
        component: StudentListComponent
      }
    ]
  },
  {
    path: 'edit/:id',
    component: StudentEditComponent,
    children: [
      {
        path: '',
        component: StudentFormComponent
      },
      {
        path: 'parents',
        component: StudentParentsComponent
      },
      {
        path: 'activities',
        component: StudentActivityComponent
      },
      {
        path: 'out-activities',
        component: StudentOutActivityComponent
      },
      {
        path: 'health',
        component: StudentHealthComponent
      },
      {
        path: 'breeding',
        component: StudentBreedingComponent
      },
      {
        path: 'family',
        component: StudentFamilyComponent
      }
    ]
  },
  {
    path: 'create',
    component: StudentFormComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }

