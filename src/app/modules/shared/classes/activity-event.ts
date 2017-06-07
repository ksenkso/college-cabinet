import {Event} from "../../calendar/interfaces/event";
import {CustomEvent} from "./custom-event";
export class ActivityEvent extends CustomEvent{
  id?: number;
  date: string;
  name: string;
  result: string;
  fio: string;
  user_id: number;
  type_id: number;

  constructor(e?: Event, userId?: number) {

    super(e, userId);

    if (e) {
      this.name = e.title;

      let [result, fio] = e.description.split('&');

      this.result = result;
      this.fio = fio;
    } else {

      this.name = '';
      this.type_id = CustomEvent.EVENT_ACTIVITY;
      this.result = '';
      this.fio = '';
    }
  }

  toEvent(): Event {
    let event = super.toEvent();

    event.title = this.name;

    event.description = `${this.result}&${this.fio}`;

    return event;

  }

  isValid() {
    return this.date && this.name && this.result && this.fio;
  }
}
