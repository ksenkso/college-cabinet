import {UserMeta} from "./user-meta";
import {EmploymentMeta} from "../classes/employment-meta";
import {HealthMeta} from "../classes/health-meta";
import {OutEmploymentMeta} from "../classes/out-employment-meta";
import {TeacherMeta} from "../classes/teacher-meta";
import {ParentMeta} from "../classes/parent-meta";
export interface UserWithMeta {
  id?: number,
  first_name: string;
  last_name: string;
  patronymic: string;
  employments?: EmploymentMeta;
  health?: HealthMeta;
  outEmployments?: OutEmploymentMeta;
  personal: TeacherMeta;
  parents?: ParentMeta;
  metaEmployments?: UserMeta[];
  metaHealths?: UserMeta[];
  metaOutEmployments?: UserMeta[];
  metaPersonal?: UserMeta[];
  metaParents?: UserMeta[];

}
