import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOutActivityComponent } from './student-out-activity.component';

describe('StudentOutActivityComponent', () => {
  let component: StudentOutActivityComponent;
  let fixture: ComponentFixture<StudentOutActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentOutActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOutActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
