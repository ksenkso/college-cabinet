import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PortfolioService} from "../../services/portfolio.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-portfolio-grades',
  templateUrl: './portfolio-grades.component.html',
  styleUrls: ['./portfolio-grades.component.css']
})
export class PortfolioGradesComponent implements OnInit {

  grades: any[] = [];

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
          .getSection(this.userId, PortfolioService.TYPE_GRADE)
          .then(courses => {
            this.grades = courses.map(course => ({
              id: course.id,
              name: course.content,
              value: course.description
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

    this.toCreate.add(this.grades.length);

    this.grades.push({
      name: '',
      value: ''
    });

  }

  deleteRow(id: number, rowIndex: number) {
    let index = this.grades.findIndex(course => course.id === id);
    console.log(index);

    if (id === void 0) {
      console.log('test');
      this.toCreate.delete(rowIndex);
      this.toUpdate.delete(rowIndex);
      this.grades.splice(rowIndex, 1);
    } else {

      this.toCreate.delete(id);
      this.toUpdate.delete(id);
      this.toDelete.push(id);
      this.grades.splice(index, 1);
    }
  }

  save() {

    let body = {
      create: [],
      update: [],
      delete: this.toDelete
    };

    this.toCreate.forEach(id => body.create.push({
      content: this.grades[id].name,
      description: this.grades[id].value,
      record_type: PortfolioService.TYPE_GRADE,
      user_id: this.userId
    }));
    this.toUpdate.forEach(id => {
      const grade = this.grades.find(grade => grade.id === id);
      body.update.push({
        id,
        content: grade.name,
        description: grade.value,
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
