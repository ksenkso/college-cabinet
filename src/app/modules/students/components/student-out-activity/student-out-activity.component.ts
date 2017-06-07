import { Component, OnInit } from '@angular/core';
import {UserMeta} from "../../../shared/interfaces/user-meta";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../shared/services/users.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {CustomMeta} from "../../../shared/classes/custom-meta";
import {OutEmploymentMeta} from "../../../shared/classes/out-employment-meta";
import {RouteParamsService} from "../../../shared/services/route-params.service";

@Component({
  selector: 'app-student-out-activity',
  templateUrl: './student-out-activity.component.html',
  styleUrls: ['./student-out-activity.component.css']
})
export class StudentOutActivityComponent implements OnInit {

  userId: number;
  meta: {[key: string]: {value: string, id?: number}};
  form: FormGroup;

  get DEFAULT_FORM_STATE(): any {
    return {
      out_courses: this.fb.group({value: '', id: null}),
      out_sports: this.fb.group({value: '', id: null}),
      out_days: this.fb.group({value: '', id: null}),
      charge: this.fb.group({value: '', id: null}),
    }
  }

  constructor(
    private fb: FormBuilder,
    private us: UserService,
    private location: Location,
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
          .getMetaByType(CustomMeta.META_OUT_EMPLOYMENT, this.userId)
          .then(user => {
            return new OutEmploymentMeta(user[0].metaOutEmployments)
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
      out_courses: this.meta.out_courses,
      out_sports: this.meta.out_sports,
      out_days: this.meta.out_days,
      charge: this.meta.charge,
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
      out_courses: formModel.out_courses,
      out_sports: formModel.out_sports,
      out_days: formModel.out_days,
      charge: formModel.charge,
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
