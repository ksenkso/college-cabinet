import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  students: User[] = [];

  constructor() {

  }

  ngOnInit() {

  }

}
