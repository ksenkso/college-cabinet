import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityOutEmploymentComponent } from './activity-out-employment.component';

describe('ActivityOutEmploymentComponent', () => {
  let component: ActivityOutEmploymentComponent;
  let fixture: ComponentFixture<ActivityOutEmploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityOutEmploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityOutEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
