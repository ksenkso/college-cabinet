import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {UserFormComponent} from "./components/user-form/users-form.component";
import {UsersComponent} from "./components/users/users.component";
import {UserListComponent} from "./components/user-list/users-list.component";
import {UserCreateComponent} from "./components/user-create/users-create.component";
import {UserEditComponent} from "./components/user-edit/users-edit.component";
import {UserService} from "./services/users.service";
import {UsersRoutingModule} from "./users-routing.module";

//noinspection JSUnusedGlobalSymbols
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  declarations: [UserFormComponent, UsersComponent, UserListComponent, UserCreateComponent, UserEditComponent],
  providers: [UserService]
})
export class UsersModule { }
