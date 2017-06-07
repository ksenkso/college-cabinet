import { Injectable } from '@angular/core';
import {User} from "../interfaces/user";
import {ApiClientService} from "./api-client.service";
import {Group} from "../../../interfaces/group";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {Role} from "../interfaces/role";
import {UserMeta} from "../interfaces/user-meta";
import {UserWithMeta} from "../interfaces/user-with-meta";

@Injectable()
export class UserService {

  protected endpoint: string = '/user';
  protected users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  users$: Observable<User[]> = this.users.asObservable();

  static ROLE_MAPPING = {
    'student': 'Студент',
    'admin': 'Администратор',
    'teacher': 'Учитель',
    'steward': 'Староста'
  };

  constructor(
    private apiClient: ApiClientService
  ) {

  }

  getMetaByType(type: number, userId?: number): Promise<UserWithMeta[]> {
    let url = `/user-meta/by-type/${type}`;
    if (userId) {
      url += `/${userId}`;
    }
    return this.apiClient
      .get<UserWithMeta[]>(url);
  }

  getMeta(userId: any = ''): Promise<UserMeta[]> {
    return this.apiClient
      .get<UserMeta[]>(`/user-meta/${userId}`);
  }

  setUserMeta(userMeta: UserMeta[]): Promise<UserMeta> {
    return this.apiClient
      .post<UserMeta>(`/user-meta`, userMeta);
  }

  batchUpdateMeta(userMeta: UserMeta[]) {
    return this.apiClient
      .post(`/user-meta/batch`, userMeta);
  }

  getUser(id: string|number): Promise<User> {

    return this.apiClient
      .get<User>(`${this.endpoint}/${id}`)
      .then(user => {

        user.roles = user.roles.map((role: Role) => role.item_name);

        return user;
      })

  }

  getUsers():Promise<Observable<User[]>> {
    return this.apiClient
      .get<User[]>(`${this.endpoint}`)
      .then(users => this.users.next(users.map(user => {user.roles.forEach(UserService.mapRole); return user;})))
      .then(() => this.users$)
  }

  saveUser(user: User): Promise<User> {
    console.log('service:submit', user);
    return this.apiClient
      .put<User>(this.endpoint, +user.id, user);
  }

  createUser(user: User): Promise<User> {
    return this.apiClient
      .post<User>(this.endpoint, user);
  }

  getGroups(): Promise<Group[]> {
    return this.apiClient
      .get<Group[]>('/group');
  }

  getRoles(): Promise<Role[]> {
    return this.apiClient
      .get<Role[]>('/role');
  }

  static mapRole(role: Role) {
    role.description = UserService.ROLE_MAPPING[role.name]
  }

  remove(userId: number) {
    this.apiClient
      .remove(this.endpoint, userId)
      .then(() => {
        this.users.next(this.users.getValue().filter(user => user.id != userId));
      })
  }
}
