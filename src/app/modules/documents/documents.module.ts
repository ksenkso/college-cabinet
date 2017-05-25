import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './components/documents/documents.component';
import { DocumentsListComponent } from './components/documents-list/documents-list.component';
import {DocumentsRoutingModule} from "./documents-routing.module";
import {DocumentsService} from "./services/documents.service";

@NgModule({
  imports: [
    CommonModule,
    DocumentsRoutingModule
  ],
  declarations: [DocumentsComponent, DocumentsListComponent],
  providers: [DocumentsService]
})
export class DocumentsModule { }
