import { Component, OnInit } from '@angular/core';
import {ParentMeta} from "../../../../../shared/classes/parent-meta";
import {CustomMeta} from "../../../../../shared/classes/custom-meta";
import {UserService} from "../../../../../shared/services/users.service";
import {UserWithMeta} from "../../../../../shared/interfaces/user-with-meta";

@Component({
  selector: 'app-collective-health',
  templateUrl: './collective-health.component.html',
  styleUrls: ['./collective-health.component.css']
})
export class CollectiveHealthComponent implements OnInit {

  users: UserWithMeta[];

  constructor(private us: UserService) { }

  ngOnInit() {
    this.us
      .getMetaByType(CustomMeta.META_PARENTS)
      .then(users => users.map(user => {
        user.parents = new ParentMeta(user.metaParents);
        return user;
      }))
      .then(users => this.users = users);
  }
}
