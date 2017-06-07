import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RouteParamsService} from "../../../shared/services/route-params.service";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  activeTab = 'activities';

  constructor(
    private route: ActivatedRoute,
    private rps: RouteParamsService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap(params => Promise.resolve(+params['id']))
      .subscribe(id => this.rps.set('user_id', id));
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
