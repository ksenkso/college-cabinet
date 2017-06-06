/**
 * Created by yazun on 24.04.2017.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CollectiveIndexComponent} from "./components/collective-index/collective-index.component";

const routes: Routes = [
  {
    path: '',
    component: CollectiveIndexComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectiveRoutingModule { }
