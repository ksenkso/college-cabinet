import { Component, OnInit } from '@angular/core';
import {EventsService} from "../../../../../shared/services/events.service";
import {Event} from "../../../../../calendar/interfaces/event";
import {ActivityEvent} from "../../../../../shared/classes/activity-event";

@Component({
  selector: 'app-activities-overview',
  templateUrl: './activities-overview.component.html',
  styleUrls: ['./activities-overview.component.css']
})
export class ActivitiesOverviewComponent implements OnInit {

  events: ActivityEvent[];

  constructor(
    private es: EventsService
  ) { }

  ngOnInit() {
    this.es
      .getOfType(EventsService.EVENT_ACTIVITY, 10)
      .then(events => this.events = events.map(e => new ActivityEvent(e)));
  }



}
