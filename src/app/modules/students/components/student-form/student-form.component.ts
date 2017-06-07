import {Component, OnInit, OnChanges, OnDestroy, Input} from '@angular/core';
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
export class StudentFormComponent implements OnInit, OnChanges, OnDestroy {

  mode: string;
  @Input() student: Student;
  studentForm: FormGroup;
  groups: Group[] = [];

  get DEFAULT_STUDENT_STATE() {

    if (this.studentsService.student) {
      console.log(this.studentsService.student);
      return this.studentsService.student;
    }

    return <Student> {
      first_name: '',
      last_name: '',
      patronymic: '',
      email: '',
      group_id: null,
      address: '',
      phone: '',
      sex: 'm',
      birth_date: ''
    };
  }

  ngOnDestroy() {
    this.studentsService.student = this.prepareSaveStudent();
  }

  constructor(
    private fb: FormBuilder,
    private studentsService: StudentsService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.createForm();
  }

  createForm() {
    let st = this.DEFAULT_STUDENT_STATE;
    console.log(st);
    this.studentForm = this.fb.group(st);

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

    const birthDate = new Date();

    const parts = formModel.birth_date.split('-').map(d => +d);
    birthDate.setDate(parts[2]);
    birthDate.setMonth(parts[1]-1);
    birthDate.setFullYear(parts[0]);

    console.log(+birthDate/1000);

    return <Student>{
      id: this.student.id,
      first_name: formModel.first_name as string,
      last_name: formModel.last_name as string,
      patronymic: formModel.patronymic as string,
      address: formModel.address as string,
      email: formModel.email as string,
      phone: formModel.phone as string,
      group_id: formModel.group_id as number,
      sex: formModel.sex as string,
      birth_date: '' + ((+birthDate / 1000) | 0) as string,
    };
  }




  ngOnChanges() {
    StudentFormComponent.log(this.student);
    if (!this.student) {
      this.student = this.DEFAULT_STUDENT_STATE;
    }
    this.studentForm.reset({
      first_name: this.student.first_name as string,
      last_name: this.student.last_name as string,
      patronymic: this.student.patronymic as string,
      address: this.student.address as string,
      phone: this.student.phone as string,
      email: this.student.email as string,
      group_id: this.student.group_id as number,
      sex: this.student.sex as string,
      birth_date: this.student.birth_date as string,
    });
    //this.studentForm.reset(this.student);
  }

  ngOnInit() {

    this.studentsService
      .getGroups()
      .then(groups => this.groups = groups);

    this.route.params
      .switchMap((params: Params) => {
        if (+params['id']) {
          this.mode = 'update';
          return this.studentsService.getStudent(+params['id']);
        }

        this.mode = 'create';
        const st = this.DEFAULT_STUDENT_STATE;
        this.studentsService.student = void 0;

        return Promise.resolve(st);
      })
      .subscribe((student: Student) => {
        const d = new Date(+student.birth_date * 1000)
        student.birth_date = `${d.getFullYear()}-${d.getMonth() < 9 ? '0' +( d.getMonth()+1) : d.getMonth()+1}-${d.getDate() < 10 ? '0' + d.getDate() : d.getDate()}`;
        this.student = student;
        this.ngOnChanges();
      });

  }

}
