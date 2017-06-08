import {Event} from "../../calendar/interfaces/event";
import {CustomEvent} from "./custom-event";
export class PsychologistEvent extends CustomEvent{
  id?: number;
  date: string;
  result: string;

  constructor(e?: Event, userId?: number) {

    super(e, userId);

    if (e) {
      this.result = e.title;
    } else {

      this.type_id = CustomEvent.EVENT_PSYCHOLOGIST;
      this.result = '';
    }
  }

  toEvent(): Event {
    let event = super.toEvent();


    event.title = this.result;

    return event;

  }

  isValid() {
    return this.date && this.result;
  }
}
