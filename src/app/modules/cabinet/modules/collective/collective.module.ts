import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectiveIndexComponent } from './components/collective-index/collective-index.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../../shared/shared.module";
import {CollectiveRoutingModule} from "./collective-routing.module";
import { CollectiveHealthComponent } from './components/collective-health/collective-health.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CollectiveRoutingModule
  ],
  declarations: [CollectiveIndexComponent, CollectiveHealthComponent]
})
export class CollectiveModule { }
