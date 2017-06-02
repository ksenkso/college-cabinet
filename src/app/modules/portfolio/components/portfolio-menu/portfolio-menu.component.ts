import { Component, OnInit } from '@angular/core';
import {DocumentsService} from "../../../shared/services/documents.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-portfolio-menu',
  templateUrl: './portfolio-menu.component.html',
  styleUrls: ['./portfolio-menu.component.css']
})
export class PortfolioMenuComponent implements OnInit {

  userId: number;

  constructor(
    private docService: DocumentsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => this.userId = +params['id']);
  }

  download(event: MouseEvent) {
    event.preventDefault();
    this.docService
      .getDocument(DocumentsService.TYPE_PORTFOLIO, this.userId);
  }

}
