import {Event} from "../../calendar/interfaces/event";
import {CustomEvent} from "./custom-event";

export class VisitEvent extends CustomEvent {
  id?: number;
  date: string;
  lesson: string;
  purpose: string;
  result: string;
  user_id: number;
  type_id: number;

  constructor(e?: Event, userId?: number) {

    super(e, userId);

    if (e) {
      this.lesson = e.title;

      let [result, fio] = e.description.split('&');

      this.purpose = result;
      this.result = fio;
    } else {

      this.lesson = '';
      this.type_id = CustomEvent.EVENT_VISIT;
      this.purpose = '';
      this.result = '';
    }

  }

  toEvent(): Event {
    let event = super.toEvent();

    event.id = this.id;
    event.title = this.lesson;

    event.description = `${this.purpose}&${this.result}`;

    return event;

  }

  isValid() {
    return this.date && this.lesson && this.purpose && this.result;
  }
}
