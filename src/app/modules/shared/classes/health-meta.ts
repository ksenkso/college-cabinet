import {UserMeta} from "../interfaces/user-meta";
import {CustomMeta} from "./custom-meta";
export class HealthMeta extends CustomMeta{

  health_group: string;
  insurance_policy: string;
  health_recs: string;

  constructor(metaList: UserMeta[]) {
    super(metaList)
  }
}
