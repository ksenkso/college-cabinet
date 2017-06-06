import { Component, OnInit } from '@angular/core';
import {TitleService} from "../../../../services/title.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private ts: TitleService) { }

  ngOnInit() {
    this.ts.setTitle('Портфолио');
  }

}
