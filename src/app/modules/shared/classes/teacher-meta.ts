import {CustomMeta} from "./custom-meta";
import {UserMeta} from "../interfaces/user-meta";
export class TeacherMeta extends CustomMeta{
  constructor(metaList: UserMeta[]) {
    super(metaList)
  }
}
