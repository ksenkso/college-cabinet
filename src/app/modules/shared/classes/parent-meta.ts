import {CustomMeta} from "./custom-meta";
import {UserMeta} from "../interfaces/user-meta";
export class ParentMeta extends CustomMeta {

  relation?: string;
  p_name: string;
  p_phone: string;
  p_address: string;
  p_employment: string;


  constructor(metaList: UserMeta[]) {
    super(metaList)
  }
}
