import {Component, OnInit, OnChanges, Input} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Group} from "../../../../interfaces/group";
import { ActivatedRoute, Params, } from "@angular/router";
import {Location} from "@angular/common";
import {GroupsService} from "../../../shared/services/groups.service";
import {TitleService} from "../../../../services/title.service";



@Component({
  selector: 'app-group-form',
  templateUrl: 'group-form.component.html',
  styleUrls: ['group-form.component.css']
})
export class GroupFormComponent implements OnInit, OnChanges {

  @Input() mode: string;
  @Input() group: Group;
  groupForm: FormGroup;
  private specs: { id: number; name: string; code: string }[] = [];

  static get DEFAULT_GROUP_STATE(): Group {
    return  <Group> {
      id: null,
      name: '',
      abbreviation: '',
      year: (new Date()).getFullYear(),
      spec_id: 1
    }
  }

  constructor(
    private fb: FormBuilder,
    private groupsService: GroupsService,
    private route: ActivatedRoute,
    private location: Location,
    private titleService: TitleService
  ) {
    console.log('mode: ', this.mode);
    this.createForm();
  }

  createForm() {
    this.groupForm = this.fb.group(GroupFormComponent.DEFAULT_GROUP_STATE)
  }

  static log(data) {
    console.log(data);
  }

  onSubmit() {
    this.group = this.prepareSaveGroup();

    if (this.mode === 'create') {
      this.groupsService.createGroup(this.group)
        .then(this.revert.bind(this))
        .then(this.goBack.bind(this))
    } else {
      console.log('submit', this.group);
      this.groupsService.saveGroup(this.group)
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

  prepareSaveGroup(): Group {
    const formModel = this.groupForm.value;

    return {
      id: this.group.id as number,
      name: formModel.name as string,
      abbreviation: formModel.abbreviation as string,
      year: formModel.year as number,
      spec_id: formModel.spec_id
    };
  }

  ngOnChanges() {
    GroupFormComponent.log(this.group);
    if (!this.group) {
      this.group = GroupFormComponent.DEFAULT_GROUP_STATE;
    }
    this.groupForm.reset({
      id: this.group.id as number,
      name: this.group.name as string,
      abbreviation: this.group.abbreviation as string,
      year: this.group.year as number,
      spec_id: this.group.spec_id as number
    });
  }

  ngOnInit() {

    this.groupsService
      .getSpecs()
      .then(specs => this.specs = specs);

    if (this.mode === 'update') {

      this.route.params
        .switchMap((params: Params) => this.groupsService.getGroup(+params['id']))
        .subscribe((group: Group) => {
          this.group = group;
          this.titleService.setTitle(`Изменить группу: ${this.group.abbreviation}`);
          this.ngOnChanges();
        });
    } else {
      this.titleService.setTitle(`Добавить группу`);
      this.group = GroupFormComponent.DEFAULT_GROUP_STATE;
    }

  }

}
