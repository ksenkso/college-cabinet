import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationParentsComponent } from './education-parents.component';

describe('EducationParentsComponent', () => {
  let component: EducationParentsComponent;
  let fixture: ComponentFixture<EducationParentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationParentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
