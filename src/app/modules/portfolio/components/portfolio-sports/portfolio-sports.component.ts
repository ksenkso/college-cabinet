import { Component, OnInit } from '@angular/core';
import {PortfolioService} from "../../services/portfolio.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-portfolio-sports',
  templateUrl: './portfolio-sports.component.html',
  styleUrls: ['./portfolio-sports.component.css']
})
export class PortfolioSportsComponent implements OnInit {

  items: any[] = [];

  toCreate: Set<number> = new Set<number>();

  toUpdate: Set<number> = new Set<number>();

  toDelete: number[] = [];

  userId: number;

  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route
      .params
      .switchMap(params => Promise.resolve(+params['id']))
      .subscribe(id => {

        this.userId = id;
        this.portfolioService
          .getSection(this.userId, PortfolioService.TYPE_SPORT)
          .then(items => {
            this.items = items.map(item => {
              const parts = item.description.split('&');

              return {
                id: item.id,
                name: item.content,
                date: parts[0],
                result: parts[1],
              };
            })
          });
      });
  }

  markAsUpdated(id: number) {
    if (!this.toCreate.has(id)) {
      this.toUpdate.add(id);
    }

  }

  addRow() {

    this.toCreate.add(this.items.length);

    this.items.push({
      name: '',
      date: '',
      result: ''
    });

  }

  deleteRow(id: number, rowIndex: number) {
    let index = this.items.findIndex(item => item.id === id);
    console.log(index);

    if (id === void 0) {
      console.log('test');
      this.toCreate.delete(rowIndex);
      this.toUpdate.delete(rowIndex);
      this.items.splice(rowIndex, 1);
    } else {

      this.toCreate.delete(id);
      this.toUpdate.delete(id);
      this.toDelete.push(id);
      this.items.splice(index, 1);
    }
  }

  save() {

    let body = {
      create: [],
      update: [],
      delete: this.toDelete
    };

    this.toCreate.forEach(id => body.create.push({
      content: this.items[id].name,
      description: `${this.items[id].date}&${this.items[id].result}`,
      record_type: PortfolioService.TYPE_SPORT,
      user_id: this.userId
    }));
    this.toUpdate.forEach(id => {
      const item = this.items.find(item => item.id === id);
      body.update.push({
        id,
        content: item.name,
        description: `${item.date}&${item.result}`,
        user_id: this.userId
      })
    });

    console.log(body);

    this.portfolioService.save(body);


  }

  goBack() {
    this.location.back();
  }

}
