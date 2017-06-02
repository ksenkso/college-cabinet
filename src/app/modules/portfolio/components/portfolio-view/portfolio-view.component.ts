import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.css']
})
export class PortfolioViewComponent implements OnInit {

  userId: number;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route
      .params.switchMap((params: Params) => {
        return Promise.resolve(params['id']);
    })
      .subscribe(userId => this.userId = userId);
  }

}
