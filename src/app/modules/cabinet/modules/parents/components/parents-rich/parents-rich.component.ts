import { Component, OnInit } from '@angular/core';
import {Family} from "../../../../../shared/classes/family";
import {FamilyService} from "../../../../../shared/services/family.service";
import {User} from "../../../../../shared/interfaces/user";

@Component({
  selector: 'app-parents-rich',
  templateUrl: './parents-rich.component.html',
  styleUrls: ['./parents-rich.component.css']
})
export class ParentsRichComponent implements OnInit {

  users: User[];

  constructor(private fs: FamilyService) {
    this.fs.getByType(Family.FAMILY_RICH)
      .then(families => this.users = families.filter(user => !!user.family));
  }

  ngOnInit() {
  }
}
