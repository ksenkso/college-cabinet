import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationIndexComponent } from './education-index.component';

describe('EducationIndexComponent', () => {
  let component: EducationIndexComponent;
  let fixture: ComponentFixture<EducationIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
