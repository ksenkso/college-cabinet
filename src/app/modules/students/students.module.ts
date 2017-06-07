import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentsRoutingModule} from "./students-routing.module";
import {StudentFormComponent} from "./components/student-form/student-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {StudentsService} from "./services/students.service";
import { StudentsComponent } from './components/students/students.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentParentsComponent } from './components/student-parents/student-parents.component';
import { StudentActivityComponent } from './components/student-activity/student-activity.component';
import { StudentOutActivityComponent } from './components/student-out-activity/student-out-activity.component';
import { StudentHealthComponent } from './components/student-health/student-health.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StudentsRoutingModule
  ],
  declarations: [StudentFormComponent, StudentsComponent, StudentListComponent, StudentParentsComponent, StudentActivityComponent, StudentOutActivityComponent, StudentHealthComponent, StudentEditComponent],
  providers: [StudentsService]
})
export class StudentsModule { }
