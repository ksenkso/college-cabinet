import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCoursesComponent } from './portfolio-courses.component';

describe('PortfolioCoursesComponent', () => {
  let component: PortfolioCoursesComponent;
  let fixture: ComponentFixture<PortfolioCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
