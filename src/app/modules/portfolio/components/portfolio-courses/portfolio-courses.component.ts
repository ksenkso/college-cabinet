import { Component, OnInit } from '@angular/core';
import {PortfolioService} from "../../services/portfolio.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-portfolio-courses',
  templateUrl: './portfolio-courses.component.html',
  styleUrls: ['./portfolio-courses.component.css'],
})
export class PortfolioCoursesComponent implements OnInit {

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
          .getSection(this.userId, PortfolioService.TYPE_COURSE)
          .then(courses => {
            this.courses = courses.map(course => ({
              id: course.id,
              name: course.content,
              hours: course.description
            }))
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
      hours: ''
    });

  }

  deleteRow(id: number, rowIndex: number) {
    let index = this.courses.findIndex(course => course.id === id);

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
      description: this.courses[id].hours,
      record_type: PortfolioService.TYPE_COURSE,
      user_id: this.userId
    }));
    this.toUpdate.forEach(id => {
      const course = this.courses.find(course => course.id === id);
      body.update.push({
        id,
        content: course.name,
        description: course.hours,
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
