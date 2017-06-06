import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetIndexComponent } from './components/cabinet-index/cabinet-index.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {CabinetRoutingModule} from "./cabinet-routing.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CabinetRoutingModule,
    SharedModule
  ],
  declarations: [CabinetIndexComponent]
})
export class CabinetModule { }
