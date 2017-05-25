import { Component, OnInit } from '@angular/core';
import {GroupsService} from "../../../shared/services/groups.service";
import {Group} from "../../../../interfaces/group";
import {TitleService} from "../../../../services/title.service";

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {

  groups: Group[];

  constructor(
    private groupsService: GroupsService,
    private titleService: TitleService
  ) { }

  ngOnInit() {

    this.titleService.setTitle('Группы');

    this.groupsService
      .getGroups()
      .then(groups$ => {
        groups$.subscribe(groups => this.groups = groups);
      });
  }

  remove(group: Group) {
    const shouldDelete = confirm(`Удалить группу ${group.abbreviation}?`);

    if (shouldDelete) {
      this.groupsService
        .deleteGroup(group.id);
    }
  }

}
