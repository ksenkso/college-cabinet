import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtocolsIndexComponent } from './components/protocols-index/protocols-index.component';
import {SharedModule} from "../../../shared/shared.module";
import {ProtocolsRoutingModule} from "./protocols-routing.module";
import { ProtocolsOutclassComponent } from './components/protocols-outclass/protocols-outclass.component';
import { ProtocolsParentMeetingsComponent } from './components/protocols-parent-meetings/protocols-parent-meetings.component';
import { ProtocolViewComponent } from './components/protocol-view/protocol-view.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProtocolsRoutingModule
  ],
  declarations: [ProtocolsIndexComponent, ProtocolsOutclassComponent, ProtocolsParentMeetingsComponent, ProtocolViewComponent]
})
export class ProtocolsModule { }
