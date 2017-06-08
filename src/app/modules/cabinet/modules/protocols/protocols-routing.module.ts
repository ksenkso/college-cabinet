/**
 * Created by yazun on 24.04.2017.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProtocolsIndexComponent} from "./components/protocols-index/protocols-index.component";
import {ProtocolsOutclassComponent} from "./components/protocols-outclass/protocols-outclass.component";
import {ProtocolsParentMeetingsComponent} from "./components/protocols-parent-meetings/protocols-parent-meetings.component";

const routes: Routes = [
  {
    path: '',
    component: ProtocolsIndexComponent,
    children: [
      {
        path: '',
        component: ProtocolsOutclassComponent
      },
      {
        path: 'parent-meetings',
        component: ProtocolsParentMeetingsComponent

      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtocolsRoutingModule { }
