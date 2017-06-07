import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../shared/services/users.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {CustomMeta} from "../../../shared/classes/custom-meta";
import {HealthMeta} from "../../../shared/classes/health-meta";
import {UserMeta} from "../../../shared/interfaces/user-meta";
import {RouteParamsService} from "../../../shared/services/route-params.service";

@Component({
  selector: 'app-student-health',
  templateUrl: './student-health.component.html',
  styleUrls: ['./student-health.component.css']
})
export class StudentHealthComponent implements OnInit {

  userId: number;
  meta: {[key: string]: {value: string, id?: number}};
  form: FormGroup;

  get DEFAULT_FORM_STATE(): any {
    return {
      health_group: this.fb.group({value: '', id: null}),
      insurance_policy: this.fb.group({value: '', id: null}),
      health_recs: this.fb.group({value: '', id: null}),
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
          .getMetaByType(CustomMeta.META_HEALTH, this.userId)
          .then(user => {
            return new HealthMeta(user[0].metaHealths)
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
      health_group: this.meta.health_group,
      insurance_policy: this.meta.insurance_policy,
      health_recs: this.meta.health_recs,
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
      health_group: formModel.health_group,
      insurance_policy: formModel.insurance_policy,
      health_recs: formModel.health_recs,
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
