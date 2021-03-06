import { Component, OnInit } from '@angular/core';
import {StudentsService} from "../../services/students.service";
import {Student} from "../../interfaces/student";
import {TitleService} from "../../../../services/title.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  constructor(
    private studentsService: StudentsService,
    private titleService: TitleService
  ) {

  }

  ngOnInit() {
    this.titleService.setTitle("Список студентов");
    this.studentsService.getStudents().then(students$ => {
      students$.subscribe(students => this.students = students);
    });
  }

  remove(student: Student) {
    const shouldDelete = confirm(`Удалить студента ${student.first_name} ${student.last_name}?`);

    if (shouldDelete) {
      this.studentsService
        .remove(student.id)
    }
  }

}
