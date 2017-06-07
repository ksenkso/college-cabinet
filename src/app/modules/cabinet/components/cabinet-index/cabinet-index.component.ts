import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";

@Component({
  selector: 'app-cabinet-index',
  templateUrl: './cabinet-index.component.html',
  styleUrls: ['./cabinet-index.component.css']
})
export class CabinetIndexComponent implements OnInit {

  activeTab = 'activities';


  constructor(
    private router: Router,
  ) { }

  ngOnInit() {

    if (this.router.url === '/cabinet') {
      this.router.navigate(['cabinet/activities']);
    }

  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
