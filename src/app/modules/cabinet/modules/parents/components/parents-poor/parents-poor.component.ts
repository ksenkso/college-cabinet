import { Component, OnInit } from '@angular/core';
import {Family} from "../../../../../shared/classes/family";
import {FamilyService} from "../../../../../shared/services/family.service";
import {User} from "../../../../../shared/interfaces/user";

@Component({
  selector: 'app-parents-poor',
  templateUrl: './parents-poor.component.html',
  styleUrls: ['./parents-poor.component.css']
})
export class ParentsPoorComponent implements OnInit {

  users: User[];

  constructor(private fs: FamilyService) {
    this.fs.getByType(Family.FAMILY_POOR)
      .then(families => this.users = families.filter(user => !!user.family));
  }

  ngOnInit() {
  }
}
