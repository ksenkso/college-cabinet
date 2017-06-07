import { Component, OnInit } from '@angular/core';
import {User} from "../../../../../shared/interfaces/user";
import {UserService} from "../../../../../shared/services/users.service";
import {CustomMeta} from "../../../../../shared/classes/custom-meta";
import {TeacherMeta} from "../../../../../shared/classes/teacher-meta";

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
    this.us.getMetaByType(CustomMeta.META_PERSONAL, this.user.id)
      .then(user => {
          this.meta = new TeacherMeta(user[0].metaPersonal);
      })

  }

}
