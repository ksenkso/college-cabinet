import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioGradesComponent } from './portfolio-grades.component';

describe('PortfolioGradesComponent', () => {
  let component: PortfolioGradesComponent;
  let fixture: ComponentFixture<PortfolioGradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioGradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
