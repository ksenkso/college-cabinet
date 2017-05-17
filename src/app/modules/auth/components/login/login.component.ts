import { Component, OnInit } from '@angular/core';
import {User} from "../../../shared/classes/user";
import {AuthService} from "../../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User({username: '', password: ''});

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit() {

  }

  onSubmit() {
    const { username, password } = this.user;

    this.authService
      .login(username, password)
      .then((authenticated: boolean) => {
        if (authenticated) {
          this.router.navigate([this.authService.redirtectUrl || '/']);
        }

      })
      .catch(authError => {
        console.error(authError);
      });

    console.log(this.user);
  }




}
