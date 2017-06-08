import {UserMeta} from "./user-meta";
import {EmploymentMeta} from "../classes/employment-meta";
import {HealthMeta} from "../classes/health-meta";
import {OutEmploymentMeta} from "../classes/out-employment-meta";
import {TeacherMeta} from "../classes/teacher-meta";
import {ParentMeta} from "../classes/parent-meta";
import {BreedingMeta} from "../classes/breeding-meta";
export interface UserWithMeta {
  id?: number,
  first_name: string;
  last_name: string;
  patronymic: string;
  birth_date: string;
  address: string;
  employments?: EmploymentMeta;
  health?: HealthMeta;
  personal: TeacherMeta;
  parents?: ParentMeta;
  outEmployments?: OutEmploymentMeta;
  breeding?: BreedingMeta;

  metaBreeding?: UserMeta[];
  metaEmployments?: UserMeta[];
  metaHealths?: UserMeta[];
  metaOutEmployments?: UserMeta[];
  metaPersonal?: UserMeta[];
  metaParents?: UserMeta[];

}
