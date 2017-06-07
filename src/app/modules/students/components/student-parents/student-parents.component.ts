import { Component, OnInit } from '@angular/core';
import {User} from "../../../shared/interfaces/user";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../shared/services/users.service";
import {UserMeta} from "../../../shared/interfaces/user-meta";
import {Location} from "@angular/common";
import {ParentMeta} from "../../../shared/classes/parent-meta";
import {CustomMeta} from "../../../shared/classes/custom-meta";
import {TeacherMeta} from "../../../shared/classes/teacher-meta";
import {ActivatedRoute, Params} from "@angular/router";
import {RouteParamsService} from "../../../shared/services/route-params.service";

@Component({
  selector: 'app-student-parents',
  templateUrl: './student-parents.component.html',
  styleUrls: ['./student-parents.component.css']
})
export class StudentParentsComponent implements OnInit {
  userId: number;
  meta: {[key: string]: {value: string, id?: number}};
  form: FormGroup;

  get DEFAULT_FORM_STATE(): any {
    return {
      p_name: this.fb.group({value: '', id: null}),
      p_phone: this.fb.group({value: '', id: null}),
      p_address: this.fb.group({value: '', id: null}),
      p_employment: this.fb.group({value: '', id: null}),
    }
  }

  constructor(
    private fb: FormBuilder,
    private us: UserService,
    private location: Location,
    private route: ActivatedRoute,
    private rps: RouteParamsService
  ) {
    this.createForm();
  }

  ngOnInit() {

    this.rps.values$
      .subscribe(values => {
        this.userId = values.user_id;
        console.log(this.userId);
        this.us
          .getMetaByType(CustomMeta.META_PARENTS, this.userId)
          .then(user => {
            return new TeacherMeta(user[0].metaParents)
          })
          .then(meta => {
            console.log(meta);
            this.meta = meta || this.DEFAULT_FORM_STATE;
            this.ngOnChanges();
          })
      });
  }

  ngOnChanges() {
    if (!this.meta) {
      this.meta = this.DEFAULT_FORM_STATE;
    }
    this.form.reset({
      p_name: this.meta.p_name,
      p_phone: this.meta.p_phone,
      p_address: this.meta.p_address,
      p_employment: this.meta.p_employment,
    });
  }

  createForm() {
    this.form = this.fb.group(this.DEFAULT_FORM_STATE);
  }

  revert() {
    this.ngOnChanges();
  }

  goBack() {
    this.location.back();
  }

  prepareSaveMeta() {
    const formModel = this.form.value;

    let data: any = {
      p_name: formModel.p_name,
      p_phone: formModel.p_phone,
      p_address: formModel.p_address,
      p_employment: formModel.p_employment,
    };
    const result = [];

    Object.keys(data).forEach(key => {
      result.push({
        user_id: this.userId,
        meta_key: key,
        meta_value: data[key].value,
        id: data[key].id
      })
    });

    return result as UserMeta[];
  }

  onSubmit() {
    let meta = this.prepareSaveMeta();
    console.log(meta);

    this.us.setUserMeta(meta)
      .then(meta => console.log(meta));
  }


}
