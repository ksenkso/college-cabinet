import { Injectable } from '@angular/core';
import {ApiClientService} from "../../shared/services/api-client.service";
import { Event } from '../interfaces/event';

@Injectable()
export class EventsService {

  private endpoint = '/events';

  constructor(
    private apiService: ApiClientService
  ) { }

  getEvents(date: Date): Promise<Event[]> {
    return this.apiService
      .get(this.endpoint)
  }

}
