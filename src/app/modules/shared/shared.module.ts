import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./services/auth-guard.service";
import {NotFoundComponent} from "./compoents/not-found/not-found.component";
import {ApiClientService} from "./services/api-client.service";
import {GroupsService} from "./services/groups.service";
import {DocumentsService} from "./services/documents.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotFoundComponent],
  providers: [AuthService, AuthGuard, ApiClientService, GroupsService, DocumentsService]
})
export class SharedModule { }
