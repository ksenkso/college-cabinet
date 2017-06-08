import {Event} from "../../calendar/interfaces/event";
import {CustomEvent} from "./custom-event";

export class AnalysisEvent extends CustomEvent {
  id?: number;
  date: string;
  content: string;
  responsible: string;
  result: string;
  user_id: number;
  type_id: number;

  constructor(e?: Event, userId?: number) {

    super(e, userId);

    if (e) {
      this.content = e.title;

      let [responsible, result] = e.description.split('&');

      this.result = result;
      this.responsible = responsible;
    } else {

      this.content = '';
      this.type_id = CustomEvent.EVENT_PLAN;
      this.result = '';
      this.responsible = '';
    }
  }

  toEvent(): Event {
    let event = super.toEvent();

    event.title = this.content;

    event.description = `${this.responsible}&${this.result}`;

    return event;

  }

  isValid() {
    return this.date && this.content && this.responsible;
  }
}
