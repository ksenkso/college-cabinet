import { Component, OnInit } from '@angular/core';
import {EmploymentMeta} from "../../../../../shared/classes/employment-meta";
import {UserService} from "../../../../../shared/services/users.service";
import {CustomMeta} from "../../../../../shared/classes/custom-meta";
import {UserWithMeta} from "../../../../../shared/interfaces/user-with-meta";
import {Location} from "@angular/common";

@Component({
  selector: 'app-activity-employment',
  templateUrl: './activity-employment.component.html',
  styleUrls: ['./activity-employment.component.css']
})
export class ActivityEmploymentComponent implements OnInit {

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
      .getMetaByType(CustomMeta.META_EMPLOYMENT)
      .then(usersWithMeta => usersWithMeta.map(user => {
        user.employments = new EmploymentMeta(user.metaEmployments);
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
