import {EventType} from "./event-type";
export interface Event {
  id: number,
  title: string,
  description?: string,
  type_id: number,
  user_id?: number,
  timestamp?: string|number,
  reported: boolean,
  report_type: number,
  form: string,
  responsible: string,
  results: string,
  type?: EventType
}
