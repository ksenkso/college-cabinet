import { Component, OnInit } from '@angular/core';
import {PortfolioService} from "../../services/portfolio.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-portfolio-works',
  templateUrl: './portfolio-works.component.html',
  styleUrls: ['./portfolio-works.component.css']
})
export class PortfolioWorksComponent implements OnInit {

  works: any[] = [];

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
          .getSection(this.userId, PortfolioService.TYPE_WORK)
          .then(works => {
            this.works = works.map(work => {

              const parts = work.description.split('&');

              return {
                id: work.id,
                name: work.content,
                chef: parts[0],
                value: parts[1],
                reviewer: parts[2]
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

    this.toCreate.add(this.works.length);

    this.works.push({
      name: '',
      value: '',
      chef: '',
      reviewer: ''
    });

  }

  deleteRow(id: number, rowIndex: number) {
    let index = this.works.findIndex(course => course.id === id);
    console.log(index);

    if (id === void 0) {
      console.log('test');
      this.toCreate.delete(rowIndex);
      this.toUpdate.delete(rowIndex);
      this.works.splice(rowIndex, 1);
    } else {

      this.toCreate.delete(id);
      this.toUpdate.delete(id);
      this.toDelete.push(id);
      this.works.splice(index, 1);
    }
  }

  save() {

    let body = {
      create: [],
      update: [],
      delete: this.toDelete
    };

    this.toCreate.forEach(id => body.create.push({
      content: this.works[id].name,
      description: `${this.works[id].chef}&${this.works[id].value}&${this.works[id].reviewer}`,
      record_type: PortfolioService.TYPE_WORK,
      user_id: this.userId
    }));
    this.toUpdate.forEach(id => {
      const work = this.works.find(work => work.id === id);
      body.update.push({
        id,
        content: work.name,
        description: `${work.chef}&${work.value}&${work.reviewer}`,
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
