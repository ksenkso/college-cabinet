import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHealthComponent } from './student-health.component';

describe('StudentHealthComponent', () => {
  let component: StudentHealthComponent;
  let fixture: ComponentFixture<StudentHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
