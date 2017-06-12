import {ProtocolType} from "./protocol-type";
export interface IProtocol {
  id?: number;
  theme: string;
  purposes: string;
  form: string;
  date: number;
  plan: string;
  organization: string;
  analysis: string;
  conclusions: string;
  protocolType?: ProtocolType
}
