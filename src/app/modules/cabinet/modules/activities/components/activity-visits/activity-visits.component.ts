import { Component, OnInit } from '@angular/core';
import {VisitEvent} from "../../../../../shared/classes/visit-event";
import {EventsService} from "../../../../../shared/services/events.service";
import {CustomEvent} from "../../../../../shared/classes/custom-event";
import {Location} from "@angular/common";

@Component({
  selector: 'app-activity-visits',
  templateUrl: './activity-visits.component.html',
  styleUrls: ['./activity-visits.component.css']
})
export class ActivityVisitsComponent implements OnInit {

  items: VisitEvent[] = [];

  toCreate: Set<number> = new Set<number>();

  toUpdate: Set<number> = new Set<number>();

  toDelete: number[] = [];

  userId: number;

  constructor(
    private eventsService: EventsService,
    private location: Location
  ) {

    this.userId = JSON.parse(localStorage.getItem('user')).id;

  }

  ngOnInit() {

    this.eventsService
      .getOfType(CustomEvent.EVENT_VISIT)
      .then(events => this.items = events.map(e => new VisitEvent(e)));
  }

  markAsUpdated(id: number) {
    if (!this.toCreate.has(id)) {
      this.toUpdate.add(id);
    }

  }

  addRow() {

    this.toCreate.add(this.items.length);

    this.items.push(new VisitEvent(null, this.userId));

  }

  deleteRow(id: number, rowIndex: number) {
    let index = this.items.findIndex(item => item.id === id);
    console.log(index);

    if (id === void 0) {
      console.log('test');
      this.toCreate.delete(rowIndex);
      this.toUpdate.delete(rowIndex);
      this.items.splice(rowIndex, 1);
    } else {

      this.toCreate.delete(id);
      this.toUpdate.delete(id);
      this.toDelete.push(id);
      this.items.splice(index, 1);
    }
  }

  save() {

    let body = {
      create: [],
      update: [],
      delete: this.toDelete
    };

    let isValid = true;

    this.toCreate.forEach(id => {
      if (this.items[id].isValid()) {

        body.create.push(this.items[id].toEvent())
      } else {
        isValid = false;
      }

    });
    this.toUpdate.forEach(id => {
      const item = this.items.find(item => item.id === id);
      const event = item.toEvent();
      if (item.isValid()) {
        body.update.push(event);
      } else {
        isValid = false;
      }

    });

    console.log(body);

    if (!isValid) {
      alert('Не все поля заполнены');
      return;
    }

    this.eventsService.batchUpdate(body)
      .then(this.goBack.bind(this))



  }

  goBack() {
    this.location.back();
  }

}
