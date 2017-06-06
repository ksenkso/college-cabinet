import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectiveIndexComponent } from './components/collective-index/collective-index.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../../shared/shared.module";
import {CollectiveRoutingModule} from "./collective-routing.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CollectiveRoutingModule
  ],
  declarations: [CollectiveIndexComponent]
})
export class CollectiveModule { }
