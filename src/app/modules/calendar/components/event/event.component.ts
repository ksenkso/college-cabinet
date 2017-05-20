import {Component, Input, OnInit} from '@angular/core';
import { Event } from '../../interfaces/event';
import {EventsService} from "../../services/events.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input()
  event: Event;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {

  }

  remove(event: Event) {
    this.eventsService.deleteEvent(event);
  }

}
