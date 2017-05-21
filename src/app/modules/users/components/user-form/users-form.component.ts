import {Component, OnInit, OnChanges, Input} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {User} from "../../interfaces/user";
import {Group} from "../../../../interfaces/group";
import {ActivatedRoute, Params, } from "@angular/router";
import {Location} from "@angular/common";
import {UserService} from "../../services/users.service";
import {Role} from "../../interfaces/role";

@Component({
  selector: 'app-user-form',
  templateUrl: 'users-form.component.html',
  styleUrls: ['users-form.component.css']
})
export class UserFormComponent implements OnInit, OnChanges {

  @Input() mode: string;
  @Input() user: User;
  userForm: FormGroup;
  groups: Group[] = [];
  roles: Role[] = [];

  public static get DEFAULT_USER_STATE() {
    return <User> {
      first_name: '',
      last_name: '',
      patronymic: '',
      email: '',
      group_id: null,
      address: '',
      phone: '',
      roles: [],
      isAdmin: false,
      isTeacher: false,
      isStudent: false,
      isSteward: false,
    };
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    console.log('mode: ', this.mode);
    this.createForm();
  }

  ngOnChanges() {
    UserFormComponent.log(this.user);
    if (!this.user) {
      this.user = UserFormComponent.DEFAULT_USER_STATE;
    }
    console.log(this.user.roles);

    this.userForm.reset({
      first_name: this.user.first_name as string,
      last_name: this.user.last_name as string,
      patronymic: this.user.patronymic as string,
      address: this.user.address as string,
      phone: this.user.phone as string,
      email: this.user.email as string,
      group_id: this.user.group_id as number,
      isAdmin: this.user.roles.find(role => role === 'admin'),
      isTeacher: this.user.roles.find(role => role === 'teacher'),
      isStudent: this.user.roles.find(role => role === 'student'),
      isSteward: this.user.roles.find(role => role === 'steward'),
    });
    //this.studentForm.reset(this.student);
  }

  ngOnInit() {

    this.userService
      .getGroups()
      .then(groups => this.groups = groups);

    this.userService
      .getRoles()
      .then(roles => {
        this.roles = roles;
        console.log(roles);

      });

    if (this.mode === 'update') {
      this.route.params
        .switchMap((params: Params) => this.userService.getUser(+params['id']))
        .subscribe((student: User) => {
          this.user = student;
          this.ngOnChanges();
        });
    } else {
      this.user = UserFormComponent.DEFAULT_USER_STATE;
    }

  }

  createForm() {
    this.userForm = this.fb.group(UserFormComponent.DEFAULT_USER_STATE);
  }

  static log(data) {
    console.log(data);
  }

  onSubmit() {
    this.user = this.prepareSaveStudent();

    if (this.mode === 'create') {
      this.userService.createUser(this.user)
        .then(UserFormComponent.log.bind(this))
        .then(this.revert.bind(this))
        .then(this.goBack.bind(this))
    } else {
      console.log('submit', this.user);
      this.userService.saveUser(this.user)
        .then(UserFormComponent.log.bind(this))
        .then(this.revert.bind(this))
        .then(this.goBack.bind(this))
    }
  }

  prepareSaveStudent(): User {
    const formModel = this.userForm.value;

    const user =  <User>{
      id: this.user.id,
      first_name: formModel.first_name as string,
      last_name: formModel.last_name as string,
      patronymic: formModel.patronymic as string,
      address: formModel.address as string,
      email: formModel.email as string,
      phone: formModel.phone as string,
      group_id: formModel.group_id as number,
      roles: []
    };

    if (formModel.isAdmin) {
      user.roles.push('admin');
    }
    if (formModel.isSteward) {
      user.roles.push('steward');
    }
    if (formModel.isStudent) {
      user.roles.push('student');
    }
    if (formModel.isTeacher) {
      user.roles.push('teacher');
    }

    return user;
  }

  revert() {
    this.ngOnChanges();
  }

  goBack() {
    this.location.back();
  }

}
