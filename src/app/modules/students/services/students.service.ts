import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Student} from "../interfaces/student";
import {ApiClientService} from "../../shared/services/api-client.service";
import {Group} from "../../../interfaces/group";

@Injectable()
export class StudentsService {

  private endpoint: string = '/student';

  constructor(
    private http: Http,
    private apiClient: ApiClientService
  ) {

  }

  getStudent(id: string|number): Promise<Student> {

    return this.apiClient
      .get<Student>(`${this.endpoint}/${id}`);

  }

  getStudents():Promise<Student[]> {
    return this.apiClient
      .get<Student[]>(`${this.endpoint}`);
  }

  saveStudent(student: Student): Promise<Student> {
    console.log('service:submit', student);
    return this.apiClient
      .put<Student>(this.endpoint, +student.student_id, student);
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

}
