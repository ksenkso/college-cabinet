import {Component, OnInit, OnChanges, OnDestroy, Input, LOCALE_ID} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Params, } from "@angular/router";
import {DatePipe, Location} from "@angular/common";
import {ProtocolService} from "../../../../../shared/services/protocol.service";
import {Protocol} from "../../../../../shared/classes/protocol";
import {ProtocolType} from "../../../../../shared/interfaces/protocol-type";

@Component({
  selector: 'app-protocol-form',
  templateUrl: './protocol-form.component.html',
  styleUrls: ['./protocol-form.component.css']
})
export class ProtocolFormComponent implements OnInit {

  mode: string;
  @Input() protocol: Protocol;
  form: FormGroup;
  protocolTypes: ProtocolType[] = [];
  schema: any;

  get DEFAULT_FORM_STATE() {

   return <any> {
      theme: '',
      purposes: '',
      form: '',
      date: +new Date() / 1000 |0,
      plan: '',
      type: 1,
      organization: '',
      analysis: '',
      conclusions: '',
      count: 0
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
    this.protocolService.protocol = this.prepareProtocol();
  }

  constructor(
    private fb: FormBuilder,
    private protocolService: ProtocolService,
    private route: ActivatedRoute,
    private location: Location
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
    let protocol = this.prepareProtocol();

    if (this.mode === 'create') {
      this.protocolService.create(protocol)
        .then(this.revert.bind(this))
        .then(this.goBack.bind(this))
    } else {
      console.log('submit', this.protocol);
      this.protocolService.update(protocol.id, protocol)
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

  prepareProtocol(): Protocol {
    const formModel = this.form.value;
    const [year, month, day] = formModel.date.split('-');
    const unixtime = new Date();
    unixtime.setFullYear(year);
    unixtime.setMonth(+month - 1);
    unixtime.setDate(+day);


    return <Protocol>{
      id: this.protocol.id,
      theme: formModel.theme,
      purposes: formModel.purposes,
      form: formModel.form,
      date: +unixtime / 1000 |0,
      plan: formModel.plan,
      type: formModel.type,
      organization: formModel.organization,
      analysis: formModel.analysis,
      conclusions: formModel.conclusions,
      count: formModel.count
    };
  }

  ngOnChanges() {

    this.form.reset({
      theme: this.protocol.theme,
      purposes: this.protocol.purposes,
      form: this.protocol.form,
      date: this.protocol.date,
      plan: this.protocol.plan,
      type: this.protocol.type,
      organization: this.protocol.organization,
      analysis: this.protocol.analysis,
      conclusions: this.protocol.conclusions,
      count: this.protocol.count
    });
  }

  ngOnInit() {

    this.protocolService
      .getTypes()
      .then(protocolTypes => this.protocolTypes = protocolTypes);


    this.route.params
      .switchMap((params: Params) => {
        if (+params['id']) {
          this.mode = 'update';
          return this.protocolService.get(+params['id']);
        }

        this.mode = 'create';
        const st = this.DEFAULT_FORM_STATE;
        this.protocolService.protocol = void 0;

        return Promise.resolve(st);
      })
      .subscribe((protocol: any) => {
        let dp = new DatePipe('ru');
        const value = dp.transform(+protocol.date * 1000, 'y-MM-dd');
        if (protocol.type == 1) {
          this.schema = Protocol.OUTCLASS_SCHEMA;
        } else {
          this.schema = Protocol.PARENTS_SCHEMA;
        }
        protocol.date = value;
        console.log(value);
        this.protocol = protocol;
        this.ngOnChanges();
      });

  }
}
