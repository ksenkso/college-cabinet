import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './components/documents/documents.component';
import { DocumentsListComponent } from './components/documents-list/documents-list.component';
import {DocumentsRoutingModule} from "./documents-routing.module";
import {DocumentsService} from "./services/documents.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    SharedModule
  ],
  declarations: [DocumentsComponent, DocumentsListComponent],
})
export class DocumentsModule { }
