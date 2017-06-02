import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioOlympiadsComponent } from './portfolio-olympiads.component';

describe('PortfolioOlympiadsComponent', () => {
  let component: PortfolioOlympiadsComponent;
  let fixture: ComponentFixture<PortfolioOlympiadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioOlympiadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioOlympiadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
