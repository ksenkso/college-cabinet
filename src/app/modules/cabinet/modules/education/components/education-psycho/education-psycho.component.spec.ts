import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationPsychoComponent } from './education-psycho.component';

describe('EducationPsychoComponent', () => {
  let component: EducationPsychoComponent;
  let fixture: ComponentFixture<EducationPsychoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationPsychoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationPsychoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
