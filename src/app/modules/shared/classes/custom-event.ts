import {Event} from "../../calendar/interfaces/event";
export class CustomEvent {
  id?: number;
  date: string;
  user_id: number;
  type_id: number;

  static EVENT_ACTIVITY = 10;
  static EVENT_VISIT = 11;


  constructor(e?: Event, userId?: number) {

    if (e) {
      this.id = e.id;

      let d = new Date(+e.timestamp * 1000);
      this.date = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
      this.user_id = userId || e.user_id;
      this.type_id = e.type_id;

      let [result, fio] = e.description.split('&');

    } else {

      const d = new Date();

      this.date = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
      this.user_id = userId;
    }

  }

  toEvent(): Event {
    let event: any = {};
    event.id = this.id;

    let d = new Date();
    const [day, month, year] = this.date.split('.').map(part => +part);
    d.setDate(day);
    d.setMonth(month-1);
    d.setFullYear(year);

    event.timestamp = +d / 1000 | 0;
    event.reported = 1;

    event.user_id = this.user_id;
    event.type_id = this.type_id;

    return event;

  }
}
