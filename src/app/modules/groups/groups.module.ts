import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupFormComponent } from './components/group-form/group-form.component';
import { GroupsComponent } from './components/groups/groups.component';
import {ReactiveFormsModule} from "@angular/forms";
import {GroupsRoutingModule} from "./groups-routing.module";
import { GroupCreateComponent } from './components/group-create/group-create.component';
import { GroupEditComponent } from './components/group-edit/group-edit.component';
import {SharedModule} from "../shared/shared.module";
import { GroupsListComponent } from './components/groups-list/groups-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GroupsRoutingModule,
    SharedModule
  ],
  declarations: [GroupFormComponent, GroupsComponent, GroupCreateComponent, GroupEditComponent, GroupsListComponent]
})
export class GroupsModule { }
