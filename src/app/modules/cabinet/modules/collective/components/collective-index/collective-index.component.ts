import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../../shared/services/users.service";
import {UserWithMeta} from "../../../../../shared/interfaces/user-with-meta";
import {CustomMeta} from "../../../../../shared/classes/custom-meta";
import {HealthMeta} from "../../../../../shared/classes/health-meta";

@Component({
  selector: 'app-collective-index',
  templateUrl: './collective-index.component.html',
  styleUrls: ['./collective-index.component.css']
})
export class CollectiveIndexComponent implements OnInit {

  users: UserWithMeta[];

  constructor(private us: UserService) { }

  ngOnInit() {
    this.us
      .getMetaByType(CustomMeta.META_HEALTH)
      .then(users => users.map(user => {
        user.health = new HealthMeta(user.metaHealths);
        return user;
      }))
      .then(users => this.users = users);
  }

}
