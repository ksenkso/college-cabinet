import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Event} from '../../interfaces/event';
import {EventType} from "../../interfaces/event-type";
import {EventsService} from "../../services/events.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  static get DEFAULT_FORM_STATE(): Event{
    return <Event> {
      title: '',
      description: '',
      type_id: 1,
      timestamp: '00:00',
      reported: false
    };
  }

  @Input() mode: string;
  @Input() event: Event;

  eventForm: FormGroup;
  eventTypes: EventType[];
  day: number;
  month: number;
  year: number;

  constructor(
    private fb: FormBuilder,
    private eventsService: EventsService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.createForm();

  }

  ngOnInit() {


    this.eventsService
      .getEventTypes()
      .then(types => this.eventTypes = types);

    if (this.mode === 'update') {
      this.route.params
        .switchMap((params: Params) => this.eventsService.getEvent(+params['id']))
        .subscribe((event: Event) => {
          this.event = event;
          this.ngOnChanges();
        });
    } else {
      this.event = EventFormComponent.DEFAULT_FORM_STATE;
    }
  }

  createForm() {
    this.eventForm = this.fb.group(EventFormComponent.DEFAULT_FORM_STATE);
  }

  static log(data) {
    console.log(data);
  }

  onSubmit() {
    this.event = this.prepareSaveEvent();

    if (this.mode === 'create') {
      this.eventsService.createEvent(this.event)
        .then(console.log)
        .then(this.revert.bind(this))
        .then(this.goBack.bind(this))
    } else {
      console.log('submit', this.event);
      this.eventsService.saveEvent(this.event)
        .then(console.log)
        .then(this.revert.bind(this))
        .then(this.goBack.bind(this))
    }
  }

  revert() {
    this.ngOnChanges();
  }

  goBack() {
    this.location.back();
  }

  prepareSaveEvent(): Event {
    const formModel = this.eventForm.value;

    console.log(this.year, this.month, this.day, formModel.timestamp);

    return <Event> {
      id: this.event.id,
      title: formModel.title,
      description: formModel.description,
      type_id: formModel.type_id,
      timestamp: formModel.timestamp,
      reported: formModel.reported
    };
  }

  ngOnChanges() {
    if (!this.event) {
      this.event = EventFormComponent.DEFAULT_FORM_STATE;
    }
    this.eventForm.reset({
      title: this.event.title as string,
      description: this.event.description as string,
      type_id: this.event.type_id as number,
      timestamp: this.event.timestamp,
      reported: this.event.reported
    });
  }


}
