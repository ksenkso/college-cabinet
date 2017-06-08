import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationPlanPartComponent } from './education-plan-part.component';

describe('EducationPlanPartComponent', () => {
  let component: EducationPlanPartComponent;
  let fixture: ComponentFixture<EducationPlanPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationPlanPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationPlanPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
