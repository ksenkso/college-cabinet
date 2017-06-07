import {UserMeta} from "../interfaces/user-meta";
export class CustomMeta {

  static META_EMPLOYMENT = 0;
  static META_OUT_EMPLOYMENT = 1;
  static META_HEALTH = 2;

  constructor(metaList: UserMeta[]) {

    metaList.forEach(meta => {
      this[meta.meta_key] = meta.meta_value;
    })
  }
}
