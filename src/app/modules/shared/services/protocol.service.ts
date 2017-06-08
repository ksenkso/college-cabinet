import { Injectable } from '@angular/core';
import {ApiClientService} from "./api-client.service";
import {IProtocol} from "../interfaces/protocol";

@Injectable()
export class ProtocolService {

  private endpoint = '/protocol';

  constructor(private apiClient: ApiClientService) { }

  getAll(type: number): Promise<IProtocol[]> {
    return this.apiClient
      .get<IProtocol[]>(`${this.endpoint}/by-type/${type}`);
  }

  get(id: number): Promise<IProtocol> {
    return this.apiClient
      .get<IProtocol>(`${this.endpoint}/${id}`);
  }

  update(protocol: IProtocol) {
    return this.apiClient
      .post(this.endpoint, protocol);
  }

}
