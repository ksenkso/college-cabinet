import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentsIndexComponent } from './components/parents-index/parents-index.component';
import {ParentsRoutingModule} from "./parents-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ParentsRoutingModule
  ],
  declarations: [ParentsIndexComponent]
})
export class ParentsModule { }
