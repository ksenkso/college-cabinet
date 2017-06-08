import {Event} from "../../calendar/interfaces/event";
import {CustomEvent} from "./custom-event";
export class ParentMeetEvent extends CustomEvent {
  id?: number;
  date: string;
  content: string;
  result: string;

  constructor(e?: Event, userId?: number) {

    super(e, userId);

    if (e) {
      this.content = e.title;
      this.result = e.description;
    } else {

      this.content = '';
      this.result = '';
      this.type_id = CustomEvent.EVENT_PARENT_MEET;
    }
  }

  toEvent(): Event {
    let event = super.toEvent();

    event.title = this.content;
    event.description = this.result;

    return event;

  }

  isValid() {
    return this.date && this.result && this.content;
  }
}
