import { Injectable } from '@angular/core';
import {ApiClientService} from "./api-client.service";
import {Family} from "../classes/family";
import {User} from "../interfaces/user";

@Injectable()
export class FamilyService {

  private endpoint = '/family';
  family: Family;

  constructor(private apiClient: ApiClientService) { }

  get(id: number): Promise<Family> {
    return this.apiClient
      .get<Family>(this.endpoint);
  }

  getByUser(user_id: number): Promise<User> {
    return this.apiClient
      .get<User>(`${this.endpoint}/by-user/${user_id}`);
  }

  create(family: Family): Promise<Family> {
    return this.apiClient
      .post<Family>(this.endpoint, family);
  }

  update(id: number, family: Family): Promise<Family> {
    return this.apiClient
      .put<Family>(this.endpoint, id, family);
  }

  getByType(type: number): Promise<User[]> {
    return this.apiClient
      .get(`${this.endpoint}/by-type/${type}`)
  }
}
