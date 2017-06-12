import { Injectable } from '@angular/core';
import {Group} from "../../../interfaces/group";
import {ApiClientService} from "./api-client.service";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class GroupsService {

  private endpoint: string = '/group';
  private groups: BehaviorSubject<Group[]> = new BehaviorSubject<Group[]>([]);

  groups$: Observable<Group[]> = this.groups.asObservable();


  constructor(
    private apiClient: ApiClientService,
  ) { }

  getSpecs(): Promise<{id: number, name: string, code: string}[]> {
    return this.apiClient
      .get('/spec');
  }

  createGroup(group: Group): Promise<Group> {
    return this.apiClient
      .post<Group>(this.endpoint, group);
  }

  saveGroup(group: Group): Promise<Group> {
    return this.apiClient
      .put<Group>(this.endpoint, +group.id, group);
  }

  getGroups(): Promise<Observable<Group[]>> {

    return this.apiClient
      .get<Group[]>(this.endpoint)
      .then(groups => {
        this.groups.next(groups);
        return this.groups$;
      })
  }

  getGroup(id: number): Promise<Group> {
    return this.apiClient
      .get<Group>(`${this.endpoint}/${id}`);
  }

  deleteGroup(id: number): Promise<boolean> {
    return this.apiClient
      .remove<boolean>(this.endpoint, id)
      .then((isDeleted) => {
        this.groups.next(this.groups.getValue().filter(group => group.id === id));
        return isDeleted;
      });
  }

}
