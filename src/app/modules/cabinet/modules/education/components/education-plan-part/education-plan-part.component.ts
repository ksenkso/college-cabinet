import {Component, Input, OnInit} from '@angular/core';
import {AnalysisEvent} from "../../../../../shared/classes/analysis-event";
import {EventsService} from "../../../../../shared/services/events.service";
import {Location} from "@angular/common";
import {CustomEvent} from "../../../../../shared/classes/custom-event";

@Component({
  selector: 'app-education-plan-part',
  templateUrl: './education-plan-part.component.html',
  styleUrls: ['./education-plan-part.component.css']
})
export class EducationPlanPartComponent implements OnInit {

  @Input() month: {month: string, events: AnalysisEvent[], index: number};

  items: AnalysisEvent[] = [];

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
    this.items = this.month.events;
  }

  markAsUpdated(id: number) {
    if (!this.toCreate.has(id)) {
      this.toUpdate.add(id);
    }

  }

  addRow() {

    this.toCreate.add(this.items.length);
    const newEvent = new AnalysisEvent(null, this.userId);
    const curDate = new Date();
    console.log(this.month.index);
    let curMonth = this.month.index > 3 ? this.month.index - 4 : this.month.index + 8;
    curDate.setMonth(curMonth);
    curDate.setDate(1);
    newEvent.date = `1.${curMonth+1}.${curDate.getFullYear()}`;
    this.items.push(newEvent);

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
