import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./services/auth-guard.service";
import {NotFoundComponent} from "./compoents/not-found/not-found.component";
import {ApiClientService} from "./services/api-client.service";
import {GroupsService} from "./services/groups.service";
import {DocumentsService} from "./services/documents.service";
import {UserService} from "./services/users.service";
import {EventsService} from "./services/events.service";
import {RouteParamsService} from "./services/route-params.service";
import {ProtocolService} from "./services/protocol.service";
import {FamilyService} from "./services/family.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotFoundComponent],
  providers: [
    AuthService,
    AuthGuard,
    ApiClientService,
    GroupsService,
    DocumentsService,
    UserService,
    EventsService,
    RouteParamsService,
    ProtocolService,
    FamilyService
  ]
})
export class SharedModule { }
