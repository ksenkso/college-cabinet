import { Component, OnInit } from '@angular/core';
import {Family} from "../../../../../shared/classes/family";
import {User} from "../../../../../shared/interfaces/user";
import {FamilyService} from "../../../../../shared/services/family.service";

@Component({
  selector: 'app-parents-problem',
  templateUrl: './parents-problem.component.html',
  styleUrls: ['./parents-problem.component.css']
})
export class ParentsProblemComponent implements OnInit {

  users: User[];

  constructor(private fs: FamilyService) {
    this.fs.getByType(Family.FAMILY_PROBLEM)
      .then(families => this.users = families.filter(user => !!user.family));
  }

  ngOnInit() {
  }

}
