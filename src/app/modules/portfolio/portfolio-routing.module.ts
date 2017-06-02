/**
 * Created by yazun on 22.04.2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {PortfolioComponent} from "./components/portfolio/portfolio.component";
import {PortfolioListComponent} from "./components/portfolio-list/portfolio-list.component";
import {PortfolioViewComponent} from "./components/portfolio-view/portfolio-view.component";
import {PortfolioGradesComponent} from "./components/portfolio-grades/portfolio-grades.component";
import {PortfolioCoursesComponent} from "./components/portfolio-courses/portfolio-courses.component";
import {PortfolioWorksComponent} from "./components/portfolio-works/portfolio-works.component";
import {PortfolioAdditionalComponent} from "./components/portfolio-additional/portfolio-additional.component";
import {PortfolioOlympiadsComponent} from "./components/portfolio-olympiads/portfolio-olympiads.component";
import {PortfolioParticipationsComponent} from "./components/portfolio-participations/portfolio-participations.component";
import {PortfolioSportsComponent} from "./components/portfolio-sports/portfolio-sports.component";
import {PortfolioCreativeComponent} from "./components/portfolio-creative/portfolio-creative.component";
import {PortfolioMenuComponent} from "./components/portfolio-menu/portfolio-menu.component";
import {PortfolioAttachmentsComponent} from "./components/portfolio-attachments/portfolio-attachments.component";

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
    children: [
      {
        path: '',
        component: PortfolioListComponent,
      },
      {
        path: 'student/:id',
        component: PortfolioMenuComponent
      },
      {
        path: 'student/:id/attachments',
        component: PortfolioAttachmentsComponent,
      },
      {
        path: 'student/:id/tables',
        component: PortfolioViewComponent,
      },
      {
        path: 'student/:id/grades',
        component: PortfolioGradesComponent,
      },
      {
        path: 'student/:id/works',
        component: PortfolioWorksComponent,
      },
      {
        path: 'student/:id/courses',
        component: PortfolioCoursesComponent,
      },
      {
        path: 'student/:id/programs',
        component: PortfolioAdditionalComponent,
      },
      {
        path: 'student/:id/olympiads',
        component: PortfolioOlympiadsComponent,
      },
      {
        path: 'student/:id/conferences',
        component: PortfolioParticipationsComponent,
      },
      {
        path: 'student/:id/sports',
        component: PortfolioSportsComponent,
      },
      {
        path: 'student/:id/creativity',
        component: PortfolioCreativeComponent,
      },

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }

