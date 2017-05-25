import { Component, OnInit } from '@angular/core';
import {DocumentsService} from "../../services/documents.service";

@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.css']
})
export class DocumentsListComponent implements OnInit {

  documents: Array<any> = [
    {
      title: 'Анализ деятельности классного руководителя',
      type_id: 1,
    },
    {
      title: 'Дневник классного руководителя',
      type_id: 2,
    }
  ];

  constructor(private documentsService: DocumentsService) { }

  ngOnInit() {

  }

  download(typeId: number) {
    this.documentsService
      .getDocument(typeId)
  }

}
