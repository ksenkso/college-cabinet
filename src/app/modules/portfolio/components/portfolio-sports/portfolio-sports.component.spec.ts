import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSportsComponent } from './portfolio-sports.component';

describe('PortfolioSportsComponent', () => {
  let component: PortfolioSportsComponent;
  let fixture: ComponentFixture<PortfolioSportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
