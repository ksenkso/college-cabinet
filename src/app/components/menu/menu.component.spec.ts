import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import {MenuService} from "../../services/menu.service";
import {OverlayService} from "../../services/overlay.service";
import {HeaderComponent} from "../header/header.component";
import {RouterTestingModule} from "@angular/router/testing";
import {Http} from "@angular/http";

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ],
      declarations: [ MenuComponent, HeaderComponent ],
      providers: [MenuService, OverlayService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
