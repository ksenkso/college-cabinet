import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';




import { AppComponent } from './components/app/app.component';
import {RoutingModule} from "./routing.module";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import { OverlayComponent } from './components/overlay/overlay.component';
import {OverlayService} from "./services/overlay.service";
import { MenuComponent } from './components/menu/menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HeaderComponent } from './components/header/header.component';
import {MenuService} from "./services/menu.service";
import {TitleService} from "./services/title.service";
import {SharedModule} from "./modules/shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OverlayComponent,
    MenuComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    RoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    OverlayService,
    MenuService,
    TitleService,
    {provide: LOCALE_ID, useValue: 'ru-RU'}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
