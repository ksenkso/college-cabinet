import {Student} from "../../students/interfaces/student";
export class Family {

  static FAMILY_NORMAL = 1;
  static FAMILY_PROBLEM = 2;
  static FAMILY_POOR = 3;
  static FAMILY_RICH = 4;
  static FAMILY_GUARDED = 5;

  user_id: number;
  id?: number;
  p_name: string;
  p_address: string;
  p_employment: string;
  p_phone: string;
  type: number;

  trouble?: string;
  consist?: string;
  edu_type?: string;
  purposes?: string;

  student?: Student;

  constructor(data?: any) {
    this.user_id = data.user_id;
    this.id = data.id;
    this.p_name = data.p_name;
    this.p_address = data.p_address;
    this.p_employment = data.p_employment;
    this.p_phone = data.p_phone;

    this.trouble = data.trouble;
    this.consist = data.consist;
    this.edu_type = data.edu_type;
    this.purposes = data.purposes;
  }
}
