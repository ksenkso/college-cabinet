import {Family} from "../classes/family";
export interface User {
  id?: number,
  first_name: string;
  last_name: string;
  patronymic: string;
  address?: string;
  phone?: string;
  group_id: number,
  email?: string,
  roles?: any;
  family?: Family
}
