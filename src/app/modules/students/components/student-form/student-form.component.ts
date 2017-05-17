import {Component, OnInit, OnChanges, Input} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Student} from "../../interfaces/student";
import {Group} from "../../../../interfaces/group";
import {StudentsService} from "../../services/students.service";
import {Router, ActivatedRoute, Params, } from "@angular/router";
import {Location} from "@angular/common";


@Component({
  selector: 'app-student-form',
  templateUrl: 'student-form.component.html',
  styleUrls: ['student-form.component.css']
})
export class StudentFormComponent implements OnInit, OnChanges {

  @Input() mode: string;
  @Input() student: Student;
  studentForm: FormGroup;
  groups: Group[] = [];

  constructor(
    private fb: FormBuilder,
    private studentsService: StudentsService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    console.log('mode: ', this.mode);
    this.createForm();
  }

  createForm() {
    this.studentForm = this.fb.group({
      first_name: '',
      last_name: '',
      patronymic: '',
      group_id: '',
      address: '',
      phone: ''
    })
  }

  static log(data) {
    console.log(data);
  }

  onSubmit() {
    this.student = this.prepareSaveStudent();

    if (this.mode === 'create') {
      this.studentsService.createStudent(this.student)
        .then(StudentFormComponent.log.bind(this))
        .then(this.revert.bind(this))
        .then(this.goBack.bind(this))
    } else {
      console.log('submit', this.student);
      this.studentsService.saveStudent(this.student)
        .then(StudentFormComponent.log.bind(this))
        .then(this.revert.bind(this))
        .then(this.goBack.bind(this))
    }
  }

  revert() {
    this.ngOnChanges();
  }

  goBack() {
    this.location.back();
  }

  prepareSaveStudent(): Student {
    const formModel = this.studentForm.value;

    return <Student>{
      student_id: this.student.student_id,
      first_name: formModel.first_name as string,
      last_name: formModel.last_name as string,
      patronymic: formModel.patronymic as string,
      address: formModel.address as string,
      phone: formModel.phone as string,
      group_id: formModel.group_id as string,
    };
  }




  ngOnChanges() {
    StudentFormComponent.log(this.student);
    if (!this.student) {
      this.student = <Student> {
        first_name: '',
        last_name: '',
        patronymic: '',
        group_id: '',
        address: '',
        phone: ''
      };
    }
    this.studentForm.reset({
      first_name: this.student.first_name as string,
      last_name: this.student.last_name as string,
      patronymic: this.student.patronymic as string,
      address: this.student.address as string,
      phone: this.student.phone as string,
      group_id: this.student.group_id as string,
    });
    //this.studentForm.reset(this.student);
  }

  ngOnInit() {

    this.studentsService
      .getGroups()
      .then(groups => this.groups = groups);

    if (this.mode === 'update') {
      this.route.params
        .switchMap((params: Params) => this.studentsService.getStudent(+params['id']))
        .subscribe((student: Student) => {
          this.student = student;
          this.ngOnChanges();
        });
    } else {
      this.student = <Student> {
        first_name: '',
        last_name: '',
        patronymic: '',
        group_id: '',
        address: '',
        phone: ''
      };
    }

  }

}
