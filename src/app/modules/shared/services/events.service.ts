import { Injectable } from '@angular/core';
import {ApiClientService} from "./api-client.service";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {EventType} from "../../calendar/interfaces/event-type";
import {Event} from "../../calendar/interfaces/event";
import {UserMeta} from "../interfaces/user-meta";
import {Batch} from "../interfaces/batch";


@Injectable()
export class EventsService {

  static EVENT_ACTIVITY = 10;

  private endpoint = '/event';
  private currentDay: number;
  private currentMonth: number;
  private currentYear: number;
  private events: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);

  events$: Observable<Event[]> = this.events.asObservable();

  constructor(
    private apiClient: ApiClientService
  ) {
    const date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonth = date.getMonth();
    this.currentDay = date.getDate();
  }

  batchUpdate(events: Batch<Event>) {
    return this.apiClient
      .post(`${this.endpoint}/batch`, events);
  }

  getOfType(type: number, limit?: number): Promise<Event[]> {

    let headers = {};
    if (limit) {
      headers['X-Limit'] = limit;
    }

    return this.apiClient
      .get<Event[]>(`${this.endpoint}/by-type/${type}`, headers);
  }

  getEvents() {

    this.apiClient
      .get<Event[]>(`${this.endpoint}/${this.currentYear}/${this.currentMonth}/${this.currentDay}`)
      .then(events => this.events.next(events));
  }

  getEventTypes(): Promise<EventType[]> {
    return this.apiClient
      .get<EventType[]>('/event-type');
  }

  getEvent(id: number): Promise<Event> {
    let cached = this.events.getValue().find(event => event.id == id);
    return cached
      ? Promise.resolve(cached)
      : this.apiClient
        .get(`${this.endpoint}/${id}`);

  }

  createEvent(event: Event): Promise<Event> {
    const [hours, minutes] = (event.timestamp as string).split(':');
    event.timestamp = +new Date(this.currentYear, this.currentMonth, this.currentDay, +hours, +minutes);
    if (event.timestamp) {
      event.timestamp = event.timestamp / 1000 | 0;
    }
    console.log('From service: ', this.currentYear, this.currentMonth, this.currentDay, event.timestamp);
    return this.apiClient
      .post<Event>(this.endpoint, event);
  }

  saveEvent(event: Event): Promise<Event> {
    return this.apiClient
      .put<Event>(this.endpoint, event.id, event);
  }

  deleteEvent(event: Event): Promise<any> {
    return this.apiClient
      .remove(this.endpoint, event.id)
      .then(() => {
        this.events.next(this.events.getValue().filter(cachedEvent => cachedEvent.id != event.id));
      })
  }
}
