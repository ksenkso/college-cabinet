import {Component, OnInit, OnChanges, OnDestroy, Input, LOCALE_ID} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Params, } from "@angular/router";
import {DatePipe, Location} from "@angular/common";
import {Family} from "../../../shared/classes/family";
import {FamilyService} from "../../../shared/services/family.service";
import {RouteParamsService} from "../../../shared/services/route-params.service";
import {User} from "../../../shared/interfaces/user";

@Component({
  selector: 'app-student-family',
  templateUrl: './student-family.component.html',
  styleUrls: ['./student-family.component.css']
})
export class StudentFamilyComponent implements OnInit {
  modelId: number;

  mode: string;
  @Input() family: Family;
  form: FormGroup;
  userId: number;
  familyTypes: {id: number, name: string}[] = [
    {
      id: 1,
      name: 'Обычная семья'
    },
    {
      id: 2,
      name: 'Проблеманая семья'
    },
    {
      id: 3,
      name: 'Малообеспеченная семья'
    },
    {
      id: 4,
      name: 'Многодетная семья'
    },
    {
      id: 5,
      name: 'Опекунская семья'
    }
  ];

  schema: any;

  get DEFAULT_FORM_STATE() {

    return <any> {
      p_name: '',
      p_address: '',
      p_employment: '',
      p_phone: '',
      trouble: '',
      consist: '',
      edu_type: '',
      purposes: '',
      type: 1
    };
  }

  isFormRequired(control: FormControl): {[key: string]: boolean} {
    if (this.form && this.form.get('type').value == 1) {
      return {required: true}
    } else {
      return {}
    }
  }

  ngOnDestroy() {
    this.familyService.family = this.prepareFamily();
  }

  constructor(
    private fb: FormBuilder,
    private familyService: FamilyService,
    private route: ActivatedRoute,
    private location: Location,
    private rps: RouteParamsService
  ) {
    this.createForm();
  }

  createForm() {
    let st = this.DEFAULT_FORM_STATE;
    console.log(st);
    this.form = this.fb.group(st);

  }

  static log(data) {
    console.log(data);
  }

  onSubmit() {
    let protocol = this.prepareFamily();

    if (this.mode === 'create') {
      this.familyService.create(protocol)
        .then(this.revert.bind(this))
        .then(this.goBack.bind(this))
    } else {
      console.log('submit', this.family);
      const id = protocol.id;
      delete protocol.id;
      this.familyService.update(id, protocol)
        .then(this.revert.bind(this))
        .then(this.goBack.bind(this))
    }
  }

  revert() {
    this.ngOnChanges();
  }

  goBack() {
    this.location.back();
  }

  prepareFamily(): Family {
    const formModel = this.form.value;

    return <Family>{
      id: this.family.id,
      user_id: this.userId,
      p_name: formModel.p_name,
      p_address: formModel.p_address,
      p_employment: formModel.p_employment,
      p_phone: formModel.p_phone,
      trouble: formModel.trouble,
      consist: formModel.consist,
      edu_type: formModel.edu_type,
      purposes: formModel.purposes,
      type: formModel.type
    };
  }

  ngOnChanges() {

    this.form.reset({
      p_name: this.family.p_name,
      p_address: this.family.p_address,
      p_employment: this.family.p_employment,
      p_phone: this.family.p_phone,
      trouble: this.family.trouble,
      consist: this.family.consist,
      edu_type: this.family.edu_type,
      purposes: this.family.purposes,
      type: this.family.type
    });
  }

  ngOnInit() {

    this.rps.values$
      .switchMap(params => {
        if (+params.user_id) {

          console.log(params);
          this.userId = +params.user_id;

          return this.familyService
            .getByUser(+params.user_id);
        }
      })
      .subscribe((user: User) => {


        if (user.family) {
          this.family = user.family;
          this.mode = 'update';
          this.modelId = user.family.id;
        } else {

          this.mode = 'create';
          this.familyService.family = void 0;
          this.family = this.DEFAULT_FORM_STATE;
        }

        this.ngOnChanges();
      });

  }
}
