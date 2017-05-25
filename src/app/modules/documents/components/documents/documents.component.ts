import { Component, OnInit } from '@angular/core';
import {TitleService} from "../../../../services/title.service";

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  constructor(
    private titleService: TitleService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Документы');
  }

}
