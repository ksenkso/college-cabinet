import { Component, OnInit } from '@angular/core';
import {PortfolioService} from "../../services/portfolio.service";

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  list: any[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService
      .getList()
      .then(list => this.list = list);
  }

}
