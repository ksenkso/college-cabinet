import { Component, OnInit } from '@angular/core';
import {Attachment} from "../../interfaces/attachment";
import {PortfolioService} from "../../services/portfolio.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-portfolio-attachments',
  templateUrl: './portfolio-attachments.component.html',
  styleUrls: ['./portfolio-attachments.component.css']
})
export class PortfolioAttachmentsComponent implements OnInit {

  userId: number;
  attachments: Attachment[];
  photo: Attachment;

  constructor(
    private portfolio: PortfolioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params
      .subscribe(params => params['id'])


    this
      .portfolio
      .getAttachments(+this.route.params['id'], PortfolioService.ATTACHMENT_DOC)
      .then(attachments => this.photo = attachments[0]);

    this
      .portfolio
      .getAttachments(+this.route.params['id'], PortfolioService.ATTACHMENT_DOC)
      .then(attachments => this.attachments = attachments);

  }

}
