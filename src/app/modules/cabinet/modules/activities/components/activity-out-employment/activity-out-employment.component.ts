import { Component, OnInit } from '@angular/core';
import {UserWithMeta} from "../../../../../shared/interfaces/user-with-meta";
import {UserService} from "../../../../../shared/services/users.service";
import {Location} from "@angular/common";
import {CustomMeta} from "../../../../../shared/classes/custom-meta";
import {OutEmploymentMeta} from "../../../../../shared/classes/out-employment-meta";

@Component({
  selector: 'app-activity-out-employment',
  templateUrl: './activity-out-employment.component.html',
  styleUrls: ['./activity-out-employment.component.css']
})
export class ActivityOutEmploymentComponent implements OnInit {

  items: UserWithMeta[] = [];

  userId: number;

  constructor(
    private userService: UserService,
    private location: Location
  ) {

    this.userId = JSON.parse(localStorage.getItem('user')).id;

  }

  ngOnInit() {

    this.userService
      .getMetaByType(CustomMeta.META_OUT_EMPLOYMENT)
      .then(usersWithMeta => usersWithMeta.map(user => {
        user.outEmployments = new OutEmploymentMeta(user.metaOutEmployments);
        return user;
      }))
      .then(this.log)
      .then(users => this.items = users);
  }

  log(data: any) {
    console.log(data);
    return data
  }


  goBack() {
    this.location.back();
  }

}
