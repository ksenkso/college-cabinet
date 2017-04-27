import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupFormComponent } from './components/group-form/group-form.component';
import { GroupsComponent } from './components/groups/groups.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GroupFormComponent, GroupsComponent]
})
export class GroupsModule { }
