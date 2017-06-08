import {Component, Input, OnInit} from '@angular/core';
import {AnalysisEvent} from "../../../../../shared/classes/analysis-event";
import {EventsService} from "../../../../../shared/services/events.service";
import {Location} from "@angular/common";
import {CustomEvent} from "../../../../../shared/classes/custom-event";

@Component({
  selector: 'app-education-plan',
  templateUrl: './education-plan.component.html',
  styleUrls: ['./education-plan.component.css']
})
export class EducationPlanComponent implements OnInit {

  months: Array<{month: string, events: AnalysisEvent[]}> = [
    {
      month: 'Сентябрь',
      events: []
    },
    {
      month: 'Октябрь',
      events: []
    },
    {
      month: 'Ноябрь',
      events: []
    },
    {
      month: 'Декабрь',
      events: []
    },
    {
      month: 'Январь',
      events: []
    },
    {
      month: 'Февраль',
      events: []
    },
    {
      month: 'Март',
      events: []
    },
    {
      month: 'Апрель',
      events: []
    },
    {
      month: 'Май',
      events: []
    },
    {
      month: 'Июнь',
      events: []
    }
  ];
  events: AnalysisEvent[];

  constructor(
    private es: EventsService
  ) {

  }

  ngOnInit() {
    this.es
      .getOfType(CustomEvent.EVENT_PLAN)
      .then(events => events.filter(event => {
        const sd = new Date();
        sd.setMonth(0);
        sd.setDate(1);

        const ed = new Date();
        ed.setMonth(11);
        ed.setDate(31);

        console.log(+event.timestamp * 1000, +sd, +ed);

        return (+event.timestamp * 1000 >= +sd) && (+event.timestamp * 1000 <= +ed);

      }))
      .then(events => {
        console.log(events);
        events.forEach(event => {
          const eventDate = new Date(+event.timestamp * 1000);
          let eventMonth = eventDate.getMonth() - 8;
          if (eventMonth < 0) eventMonth = -eventMonth;

          this.months[eventMonth].events.push(new AnalysisEvent(event));
        })
      })
  }

}
