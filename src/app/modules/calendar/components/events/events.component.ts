import { Component, OnInit } from '@angular/core';
import {EventsService} from "../../services/events.service";
import {Event} from "../../interfaces/event";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[] = [];

  constructor(private eventsService: EventsService) {
    this.eventsService
      .events$
      .subscribe(events => this.events = events);
  }

  ngOnInit() {

  }
}
