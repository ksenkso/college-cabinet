export class User {
  username = '';
  access_token = '';
  first_name = '';
  last_name = '';
  patronymic = '';
  group_id = 0;
  password = '';

  constructor({username = '', password = '', last_name = '', first_name = '', patronymic = '', group_id = 0, access_token = ''}) {

    this.username = username;
    this.password = password;
    this.last_name = last_name;
    this.first_name = first_name;
    this.patronymic = patronymic;
    this.group_id = group_id;
    this.access_token = access_token;
  }




}
