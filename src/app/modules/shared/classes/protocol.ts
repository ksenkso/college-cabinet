import {IProtocol} from "../interfaces/protocol";
export class Protocol implements IProtocol{
  theme: string;
  purposes: string;
  form: string;
  date: string;
  plan: string;
  organization: string;
  analysis: string;
  conclusions: string;

  constructor() {
    this.theme = '';
    this.purposes = '';
    this.form = '';
    this.date = '';
    this.plan = '';
    this.organization = '';
    this.analysis = '';
    this.conclusions = '';
  }
}
