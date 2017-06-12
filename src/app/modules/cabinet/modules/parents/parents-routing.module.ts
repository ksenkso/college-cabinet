/**
 * Created by yazun on 24.04.2017.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ParentsIndexComponent} from "./components/parents-index/parents-index.component";
import {ParentsViewComponent} from "./components/parents-view/parents-view.component";
import {ParentsGuardedComponent} from "./components/parenst-guarded/parents-guarded.component";
import {ParentsPoorComponent} from "./components/parents-poor/parents-poor.component";
import {ParentsProblemComponent} from "./components/parents-problem/parents-problem.component";
import {ParentsRichComponent} from "./components/parents-rich/parents-rich.component";

const routes: Routes = [
  {
    path: '',
    component: ParentsIndexComponent,
    children: [
      {
        path: '',
        component:ParentsViewComponent
      },
      {
        path: 'guarded',
        component: ParentsGuardedComponent
      },
      {
        path: 'poor',
        component: ParentsPoorComponent
      },
      {
        path: 'problem',
        component: ParentsProblemComponent
      },
      {
        path: 'rich',
        component: ParentsRichComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsRoutingModule { }
