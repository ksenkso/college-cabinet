import {CustomMeta} from "./custom-meta";
import {UserMeta} from "../interfaces/user-meta";
export class OutEmploymentMeta extends CustomMeta{

  out_courses: string;
  out_sports: string;
  out_days: string;
  charge: string;

  constructor(metaList: UserMeta[]) {
    super(metaList)
  }
}
