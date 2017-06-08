import { Component, OnInit } from '@angular/core';
import {EventsService} from "../../../../../shared/services/events.service";
import {CustomEvent} from "../../../../../shared/classes/custom-event";
import {Location} from "@angular/common";
import {ParentMeetEvent} from "../../../../../shared/classes/parent-meet-event";


@Component({
  selector: 'app-education-parents',
  templateUrl: './education-parents.component.html',
  styleUrls: ['./education-parents.component.css']
})
export class EducationParentsComponent implements OnInit {

  items: ParentMeetEvent[] = [];

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
      .getOfType(CustomEvent.EVENT_PARENT_MEET)
      .then(events => this.items = events.map(e => new ParentMeetEvent(e)));
  }

  markAsUpdated(id: number) {
    if (!this.toCreate.has(id)) {
      this.toUpdate.add(id);
    }

  }

  addRow() {

    this.toCreate.add(this.items.length);

    this.items.push(new ParentMeetEvent(null, this.userId));

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
    //.then(this.goBack.bind(this))



  }

  goBack() {
    this.location.back();
  }
}
