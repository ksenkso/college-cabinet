import { Component, OnInit } from '@angular/core';
import {TitleService} from "../../../../services/title.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit() {
    this.titleService.setTitle("Изменить студента");
  }

}
