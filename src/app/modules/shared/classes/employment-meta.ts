import {CustomMeta} from "./custom-meta";
import {UserMeta} from "../interfaces/user-meta";
export class EmploymentMeta extends CustomMeta{

  courses: string;
  sports: string;
  days: string;

  constructor(metaList: UserMeta[]) {
    super(metaList)
  }
}
