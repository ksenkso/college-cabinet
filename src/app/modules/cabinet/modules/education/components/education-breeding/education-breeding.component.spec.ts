import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationBreedingComponent } from './education-breeding.component';

describe('EducationBreedingComponent', () => {
  let component: EducationBreedingComponent;
  let fixture: ComponentFixture<EducationBreedingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationBreedingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationBreedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
