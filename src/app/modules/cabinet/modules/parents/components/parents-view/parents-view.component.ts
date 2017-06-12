import { Component, OnInit } from '@angular/core';
import {Family} from "../../../../../shared/classes/family";
import {FamilyService} from "../../../../../shared/services/family.service";
import {User} from "../../../../../shared/interfaces/user";

@Component({
  selector: 'app-parents-view',
  templateUrl: './parents-view.component.html',
  styleUrls: ['./parents-view.component.css']
})
export class ParentsViewComponent implements OnInit {

  users: User[];

  constructor(private fs: FamilyService) {
    this.fs.getByType(Family.FAMILY_NORMAL)
      .then(families => this.users = families);
  }

  ngOnInit() {
  }

}
