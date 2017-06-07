import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Student} from "../interfaces/student";
import {ApiClientService} from "../../shared/services/api-client.service";
import {Group} from "../../../interfaces/group";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class StudentsService {

  private endpoint: string = '/student';
  private students: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);
  private _student: Student;

  students$: Observable<Student[]> = this.students.asObservable();


  constructor(
    private http: Http,
    private apiClient: ApiClientService
  ) {

  }

  set student(student: Student) {
    this._student = student;
  }

  get student() {
    return this._student;
  }

  getStudent(id: string|number): Promise<Student> {

    return this.apiClient
      .get<Student>(`${this.endpoint}/${id}`);

  }

  getStudents():Promise<Observable<Student[]>> {
    return this.apiClient
      .get<Student[]>(`${this.endpoint}`)
      .then(students => this.students.next(students))
      .then(() => this.students$)
  }

  saveStudent(student: Student): Promise<Student> {
    console.log('service:submit', student);
    return this.apiClient
      .put<Student>(this.endpoint, +student.id, student);
  }

  createStudent(student: Student): Promise<Student> {
    return this.apiClient
      .post<Student>(this.endpoint, student);
  }

  getGroups(): Promise<Group[]> {
    return this.apiClient
      .get<Group[]>('/group');
  }



  static handleError(err) {
    console.error(err);
  }

  remove(studentId: number) {
    this.apiClient
      .remove(this.endpoint, studentId)
      .then(() => {
        this.students.next(this.students.getValue().filter(student => student.id != studentId));
      })
  }
}
