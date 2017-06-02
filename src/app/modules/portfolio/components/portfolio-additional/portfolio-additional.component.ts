import { Component, OnInit } from '@angular/core';
import {PortfolioService} from "../../services/portfolio.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-portfolio-additional',
  templateUrl: './portfolio-additional.component.html',
  styleUrls: ['./portfolio-additional.component.css']
})
export class PortfolioAdditionalComponent implements OnInit {

  courses: any[] = [];

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
          .getSection(this.userId, PortfolioService.TYPE_ADDITIONAL)
          .then(courses => {
            this.courses = courses.map(course => {
              const parts = course.description.split('&');

              return {
                id: course.id,
                name: course.content,
                hours: parts[0],
                place: parts[1],
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

    this.toCreate.add(this.courses.length);

    this.courses.push({
      name: '',
      place: '',
      hours: ''
    });

  }

  deleteRow(id: number, rowIndex: number) {
    let index = this.courses.findIndex(course => course.id === id);
    console.log(index);

    if (id === void 0) {
      console.log('test');
      this.toCreate.delete(rowIndex);
      this.toUpdate.delete(rowIndex);
      this.courses.splice(rowIndex, 1);
    } else {

      this.toCreate.delete(id);
      this.toUpdate.delete(id);
      this.toDelete.push(id);
      this.courses.splice(index, 1);
    }
  }

  save() {

    let body = {
      create: [],
      update: [],
      delete: this.toDelete
    };

    this.toCreate.forEach(id => body.create.push({
      content: this.courses[id].name,
      description: `${this.courses[id].date}&${this.courses[id].hours}`,
      record_type: PortfolioService.TYPE_ADDITIONAL,
      user_id: this.userId
    }));
    this.toUpdate.forEach(id => {
      const work = this.courses.find(work => work.id === id);
      body.update.push({
        id,
        content: work.name,
        description: `${work.date}&${work.hours}`,
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
