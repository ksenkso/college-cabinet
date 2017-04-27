import { Component, OnInit } from '@angular/core';
import {Student} from "../../interfaces/student";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];

  constructor() {

  }

  ngOnInit() {

  }

}
