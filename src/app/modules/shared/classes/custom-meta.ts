import {UserMeta} from "../interfaces/user-meta";
export class CustomMeta {

  static META_EMPLOYMENT = 0;
  static META_OUT_EMPLOYMENT = 1;
  static META_HEALTH = 2;
  static META_PARENTS = 3;
  static META_BREEDING = 4;

  static META_PERSONAL = 10;

  constructor(metaList: UserMeta[]) {

    metaList.forEach(meta => {
      this[meta.meta_key] = {value: meta.meta_value, id: meta.id}
    })
  }
}
