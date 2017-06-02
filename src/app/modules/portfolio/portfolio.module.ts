import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioViewComponent } from './components/portfolio-view/portfolio-view.component';
import { PortfolioGradesComponent } from './components/portfolio-grades/portfolio-grades.component';
import { PortfolioWorksComponent } from './components/portfolio-works/portfolio-works.component';
import { PortfolioCoursesComponent } from './components/portfolio-courses/portfolio-courses.component';
import { PortfolioAdditionalComponent } from './components/portfolio-additional/portfolio-additional.component';
import { PortfolioParticipationsComponent } from './components/portfolio-participations/portfolio-participations.component';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import {PortfolioRoutingModule} from "./portfolio-routing.module";
import {PortfolioService} from "./services/portfolio.service";
import {FormsModule} from "@angular/forms";
import { ContenteditableDirective } from './directives/contenteditable.directive';
import { PortfolioOlympiadsComponent } from './components/portfolio-olympiads/portfolio-olympiads.component';
import { PortfolioSportsComponent } from './components/portfolio-sports/portfolio-sports.component';
import { PortfolioCreativeComponent } from './components/portfolio-creative/portfolio-creative.component';
import { PortfolioMenuComponent } from './components/portfolio-menu/portfolio-menu.component';
import { PortfolioAttachmentsComponent } from './components/portfolio-attachments/portfolio-attachments.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PortfolioRoutingModule
  ],
  declarations: [
    PortfolioComponent,
    PortfolioViewComponent,
    PortfolioGradesComponent,
    PortfolioWorksComponent,
    PortfolioCoursesComponent,
    PortfolioAdditionalComponent,
    PortfolioParticipationsComponent,
    PortfolioListComponent,
    ContenteditableDirective,
    PortfolioOlympiadsComponent,
    PortfolioSportsComponent,
    PortfolioCreativeComponent,
    PortfolioMenuComponent,
    PortfolioAttachmentsComponent
  ],
  providers: [PortfolioService],
})
export class PortfolioModule { }
