import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtocolsIndexComponent } from './components/protocols-index/protocols-index.component';
import {SharedModule} from "../../../shared/shared.module";
import {ProtocolsRoutingModule} from "./protocols-routing.module";
import { ProtocolsOutclassComponent } from './components/protocols-outclass/protocols-outclass.component';
import { ProtocolsParentMeetingsComponent } from './components/protocols-parent-meetings/protocols-parent-meetings.component';
import { ProtocolViewComponent } from './components/protocol-view/protocol-view.component';
import { ProtocolViewOutclassComponent } from './components/protocol-view-outclass/protocol-view-outclass.component';
import { ProtocolViewParentsComponent } from './components/protocol-view-parents/protocol-view-parents.component';
import { ProtocolFormComponent } from './components/protocol-form/protocol-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ProtocolsRoutingModule
  ],
  declarations: [ProtocolsIndexComponent, ProtocolsOutclassComponent, ProtocolsParentMeetingsComponent, ProtocolViewComponent, ProtocolViewOutclassComponent, ProtocolViewParentsComponent, ProtocolFormComponent]
})
export class ProtocolsModule { }
