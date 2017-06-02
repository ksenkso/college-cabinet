import { Component, OnInit } from '@angular/core';
import {PortfolioService} from "../../services/portfolio.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-portfolio-olympiads',
  templateUrl: './portfolio-olympiads.component.html',
  styleUrls: ['./portfolio-olympiads.component.css']
})
export class PortfolioOlympiadsComponent implements OnInit {

  olympiads: any[] = [];

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
          .getSection(this.userId, PortfolioService.TYPE_OLYMPIADS)
          .then(olympiads => {
            this.olympiads = olympiads.map(olymp => {
              const parts = olymp.description.split('&');

              return {
                id: olymp.id,
                name: olymp.content,
                place: parts[0],
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

    this.toCreate.add(this.olympiads.length);

    this.olympiads.push({
      name: '',
      place: '',
      result: ''
    });

  }

  deleteRow(id: number, rowIndex: number) {
    let index = this.olympiads.findIndex(olymp => olymp.id === id);
    console.log(index);

    if (id === void 0) {
      console.log('test');
      this.toCreate.delete(rowIndex);
      this.toUpdate.delete(rowIndex);
      this.olympiads.splice(rowIndex, 1);
    } else {

      this.toCreate.delete(id);
      this.toUpdate.delete(id);
      this.toDelete.push(id);
      this.olympiads.splice(index, 1);
    }
  }

  save() {

    let body = {
      create: [],
      update: [],
      delete: this.toDelete
    };

    this.toCreate.forEach(id => body.create.push({
      content: this.olympiads[id].name,
      description: `${this.olympiads[id].date}&${this.olympiads[id].result}`,
      record_type: PortfolioService.TYPE_OLYMPIADS,
      user_id: this.userId
    }));
    this.toUpdate.forEach(id => {
      const olymp = this.olympiads.find(olymp => olymp.id === id);
      body.update.push({
        id,
        content: olymp.name,
        description: `${olymp.date}&${olymp.result}`,
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
