import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../shared/services/users.service";
import {Location} from "@angular/common";
import {ActivatedRoute, Params} from "@angular/router";
import {CustomMeta} from "../../../shared/classes/custom-meta";
import {EmploymentMeta} from "../../../shared/classes/employment-meta";
import {UserMeta} from "../../../shared/interfaces/user-meta";
import {RouteParamsService} from "../../../shared/services/route-params.service";

@Component({
  selector: 'app-student-activity',
  templateUrl: './student-activity.component.html',
  styleUrls: ['./student-activity.component.css']
})
export class StudentActivityComponent implements OnInit {

  userId: number;
  meta: {[key: string]: {value: string, id?: number}};
  form: FormGroup;

  get DEFAULT_FORM_STATE(): any {
    return {
      courses: this.fb.group({value: '', id: null}),
      sports: this.fb.group({value: '', id: null}),
      days: this.fb.group({value: '', id: null}),
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
          .getMetaByType(CustomMeta.META_EMPLOYMENT, this.userId)
          .then(user => {
            return new EmploymentMeta(user[0].metaEmployments)
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
      courses: this.meta.courses,
      sports: this.meta.sports,
      days: this.meta.days,
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
      courses: formModel.courses,
      sports: formModel.sports,
      days: formModel.days,
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
