import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../../shared/services/users.service";
import {CustomMeta} from "../../../../../shared/classes/custom-meta";
import {UserWithMeta} from "../../../../../shared/interfaces/user-with-meta";
import {Location} from "@angular/common";
import {BreedingMeta} from "../../../../../shared/classes/breeding-meta";

@Component({
  selector: 'app-education-breeding',
  templateUrl: './education-breeding.component.html',
  styleUrls: ['./education-breeding.component.css']
})
export class EducationBreedingComponent implements OnInit {

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
      .getMetaByType(CustomMeta.META_BREEDING)
      .then(usersWithMeta => usersWithMeta.map(user => {
        user.breeding = new BreedingMeta(user.metaBreeding);
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
