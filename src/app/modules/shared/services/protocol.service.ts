import { Injectable } from '@angular/core';
import {ApiClientService} from "./api-client.service";
import {IProtocol} from "../interfaces/protocol";
import {Protocol} from "../classes/protocol";
import {ProtocolType} from "../interfaces/protocol-type";

@Injectable()
export class ProtocolService {

  private endpoint = '/protocol';
  protocol: Protocol;

  constructor(private apiClient: ApiClientService) { }

  getAll(type: number): Promise<IProtocol[]> {
    return this.apiClient
      .get<IProtocol[]>(`${this.endpoint}/by-type/${type}`);
  }

  get(id: number): Promise<IProtocol> {
    return this.apiClient
      .get<IProtocol>(`${this.endpoint}/${id}`);
  }

  update(id: number, protocol: IProtocol) {
    return this.apiClient
      .put(this.endpoint, id, protocol);
  }

  create(protocol: Protocol) {
    return this.apiClient
      .post(this.endpoint, protocol);
  }


  getTypes(): Promise<ProtocolType[]> {
    return this.apiClient
      .get('/protocol-type');
  }
}
