import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentsIndexComponent } from './components/parents-index/parents-index.component';
import {ParentsRoutingModule} from "./parents-routing.module";
import { ParentsViewComponent } from './components/parents-view/parents-view.component';
import {SharedModule} from "../../../shared/shared.module";
import { ParentsPoorComponent } from './components/parents-poor/parents-poor.component';
import { ParentsProblemComponent } from './components/parents-problem/parents-problem.component';
import { ParentsRichComponent } from './components/parents-rich/parents-rich.component';
import {ParentsGuardedComponent} from "./components/parenst-guarded/parents-guarded.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ParentsRoutingModule
  ],
  declarations: [ParentsIndexComponent, ParentsViewComponent, ParentsPoorComponent, ParentsProblemComponent, ParentsRichComponent, ParentsGuardedComponent],

})
export class ParentsModule { }
