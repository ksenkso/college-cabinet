/**
 * Created by yazun on 24.04.2017.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DocumentsComponent} from "./components/documents/documents.component";
import {DocumentsListComponent} from "./components/documents-list/documents-list.component";

const routes: Routes = [
  {
    path: '',
    component: DocumentsComponent,
    children: [
      {
        path: '',
        component: DocumentsListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
