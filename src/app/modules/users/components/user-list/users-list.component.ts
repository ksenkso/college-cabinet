import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/user";
import {TitleService} from "../../../../services/title.service";
import {UserService} from "../../services/users.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService,
    private titleService: TitleService
  ) {

  }

  ngOnInit() {
    this.titleService.setTitle("Список пользователей");
    this.userService.getUsers().then(students$ => {
      students$.subscribe(students => this.users = students);
    });
  }

  remove(student: User) {
    const shouldDelete = confirm(`Удалить пользователя ${student.first_name} ${student.last_name}?`);

    if (shouldDelete) {
      this.userService
        .remove(student.id)
    }
  }

}
