import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityEmploymentComponent } from './activity-employment.component';

describe('ActivityEmploymentComponent', () => {
  let component: ActivityEmploymentComponent;
  let fixture: ComponentFixture<ActivityEmploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityEmploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
