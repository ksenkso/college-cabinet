import { Component, OnInit } from '@angular/core';
import {User} from "../../../../../shared/interfaces/user";
import {UserService} from "../../../../../shared/services/users.service";
import {UserMeta} from "../../../../../shared/interfaces/user-meta";
import {TeacherMeta} from "../../interfaces/teacher-meta";

@Component({
  selector: 'app-personal-index',
  templateUrl: './personal-index.component.html',
  styleUrls: ['./personal-index.component.css']
})
export class PersonalIndexComponent implements OnInit {

  user: User = JSON.parse(localStorage.getItem('user')) as User;
  meta: TeacherMeta;

  constructor(
    private us: UserService
  ) { }

  ngOnInit() {
    this.us.getMeta(this.user.id)
      .then(meta => {
        let mapping = {};
        meta.forEach((record: UserMeta) => {
          if (record.meta_key) {
            mapping[record.meta_key] = record.meta_value;
          }

        });
        return (Object.keys(mapping).length ? mapping : void 0) as TeacherMeta;
      })
      .then(mapping => this.meta = mapping);

  }

}
