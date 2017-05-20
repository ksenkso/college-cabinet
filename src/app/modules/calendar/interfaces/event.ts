import {EventType} from "./event-type";
export interface Event {
  id: number,
  title: string,
  description?: string,
  type_id: number,
  user_id?: number,
  timestamp?: string|number,
  reported: boolean,
  type?: EventType
}
