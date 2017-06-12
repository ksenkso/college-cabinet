import {IProtocol} from "../interfaces/protocol";
import {ProtocolType} from "../interfaces/protocol-type";
export class Protocol implements IProtocol{

  static PROTOCOL_OUTCLASS = 1;
  static PROTOCOL_PARENTS = 2;
  static OUTCLASS_SCHEMA = {
    theme: 'Тема',
    purposes: 'Цели',
    form: 'Форма проведения',
    date: 'Дата проведения',
    plan: 'План проведения',
    organization: 'Орагнизация',
    analysis: 'Анализ проведенного мероприятия',
    conclusions: 'Выводы'
  };

  static PARENTS_SCHEMA = {
    theme: 'Тема',
    purposes: 'Повестка',
    form: 'Форма проведения',
    date: 'Дата ',
    plan: 'Слушали',
    organization: 'Орагнизация',
    analysis: 'Анализ проведенного мероприятия',
    conclusions: 'Решили'
  };

  id?: number;
  theme: string;
  purposes: string;
  form: string;
  date: number;
  plan: string;
  organization: string;
  analysis: string;
  conclusions: string;
  type: number;
  count?: number;
  protocolType?: ProtocolType;

  constructor(data?: IProtocol) {
    if (data) {

      this.theme = data.theme;
      this.purposes = data.purposes;
      this.form = data.form;
      this.date = 0;
      this.plan = data.plan;
      this.organization = data.organization;
      this.analysis = data.analysis;
      this.conclusions = data.conclusions;
      this.type = data.protocolType.id;
      this.protocolType = data.protocolType;

    } else {
      this.theme = '';
      this.purposes = '';
      this.form = '';
      this.date = 0;
      this.plan = '';
      this.organization = '';
      this.analysis = '';
      this.conclusions = '';
      this.type = 1;
      this.protocolType = {id: 1, name: 'Внеклассное мероприятие'};
    }
  }
}
