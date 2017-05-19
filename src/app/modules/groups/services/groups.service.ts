import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Group} from "../../../interfaces/group";

@Injectable()
export class GroupsService {

  private endpoint: string = '/groups';


  constructor(private http: Http) { }

  createGroup(group: Group): Promise<Group> {
    return this.http.post(this.endpoint, group)
      .toPromise()
      .then(res => res.json() as Group)
      .catch(GroupsService.handleError)
  }

  saveGroup(group: Group): Promise<Group> {
    return this.http.put(`${this.endpoint}/${group.group_id}`, group)
      .toPromise()
      .then(res => res.json() as Group)
      .catch(GroupsService.handleError)
  }

  getGroups(): Promise<Group[]> {
    return this.http.get(this.endpoint)
      .toPromise()
      .then(res => res.json() as Group[])
      .catch(GroupsService.handleError)
  }

  getGroup(id: number|string): Promise<Group> {
    return this.http.get(`${this.endpoint}/${id}`)
      .toPromise()
      .then(res => res.json() as Group)
      .catch(GroupsService.handleError)
  }

  deleteGroup(id: number|string): Promise<boolean> {
    return this.http.delete(`${this.endpoint}/${id}`)
      .toPromise()
      .then(res => res.json() as boolean)
      .catch(GroupsService.handleError)
  }

  static handleError(err) {
    console.error(err);
  }
}
