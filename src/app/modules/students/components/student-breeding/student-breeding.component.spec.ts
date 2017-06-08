import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBreedingComponent } from './student-breeding.component';

describe('StudentBreedingComponent', () => {
  let component: StudentBreedingComponent;
  let fixture: ComponentFixture<StudentBreedingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentBreedingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBreedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
