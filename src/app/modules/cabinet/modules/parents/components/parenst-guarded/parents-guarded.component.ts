import { Component, OnInit } from '@angular/core';
import {Family} from "../../../../../shared/classes/family";
import {FamilyService} from "../../../../../shared/services/family.service";
import {User} from "../../../../../shared/interfaces/user";

@Component({
  selector: 'app-parenst-guarded',
  templateUrl: './parents-guarded.component.html',
  styleUrls: ['./parents-guarded.component.css']
})
export class ParentsGuardedComponent implements OnInit {

  users: User[];

  constructor(private fs: FamilyService) {
    this.fs.getByType(Family.FAMILY_GUARDED)
      .then(families => this.users = families.filter(user => !!user.family));
  }

  ngOnInit() {
  }
}
