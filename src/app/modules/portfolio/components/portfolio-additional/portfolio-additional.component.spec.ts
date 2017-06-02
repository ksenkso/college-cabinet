import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAdditionalComponent } from './portfolio-additional.component';

describe('PortfolioAdditionalComponent', () => {
  let component: PortfolioAdditionalComponent;
  let fixture: ComponentFixture<PortfolioAdditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioAdditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioAdditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
