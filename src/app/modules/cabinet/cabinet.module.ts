import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetIndexComponent } from './components/cabinet-index/cabinet-index.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import { CabinetPersonalComponent } from './components/cabinet-personal/cabinet-personal.component';
import {CabinetRoutingModule} from "./cabinet-routing.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CabinetRoutingModule,
    SharedModule
  ],
  declarations: [CabinetIndexComponent, CabinetPersonalComponent]
})
export class CabinetModule { }
