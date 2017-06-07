import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../../../shared/services/users.service";
import {TeacherMeta} from "../../interfaces/teacher-meta";
import {User} from "../../../../../shared/interfaces/user";
import {UserMeta} from "../../../../../shared/interfaces/user-meta";
import {Location} from "@angular/common";

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {

  user: User;
  meta: {[key: string]: {value: string, id?: number}};
  form: FormGroup;

  get DEFAULT_FORM_STATE(): any {
    return {
      experience: this.fb.group({value: '', id: null}),
      category: this.fb.group({value: '', id: null}),
      attestation_period: this.fb.group({value: '', id: null}),
      college_theme: this.fb.group({value: '', id: null}),
      teacher_theme: this.fb.group({value: '', id: null}),
      info: this.fb.group({value: '', id: null})
    }
  }

  constructor(
    private fb: FormBuilder,
    private us: UserService,
    private location: Location
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.us
      .getMeta(this.user.id)
      .then(meta => {
        let mapping = {};
        meta.forEach((record: UserMeta) => {
          if (record.meta_key) {
            mapping[record.meta_key] = {value: record.meta_value, id: record.id};
          }
        });
        return (Object.keys(mapping).length ? mapping : void 0) as TeacherMeta;

      })
      .then(meta => {
        console.log(meta);
        this.meta = meta || this.DEFAULT_FORM_STATE;
        this.ngOnChanges();
      })

  }

  ngOnChanges() {
    if (!this.meta) {
      this.meta = this.DEFAULT_FORM_STATE;
    }
    this.form.reset({
      experience: this.meta.experience,
      category: this.meta.category,
      attestation_period: this.meta.attestation_period,
      college_theme: this.meta.college_theme,
      teacher_theme: this.meta.teacher_theme,
      info: this.meta.info
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
      experience: formModel.experience,
      category: formModel.category,
      attestation_period: formModel.attestation_period,
      college_theme: formModel.college_theme,
      teacher_theme: formModel.teacher_theme,
      info: formModel.info
    };
    const result = [];

    Object.keys(data).forEach(key => {
      result.push({
        user_id: this.user.id,
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
