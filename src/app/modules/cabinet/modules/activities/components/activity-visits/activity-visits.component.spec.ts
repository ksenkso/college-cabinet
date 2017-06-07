import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityVisitsComponent } from './activity-visits.component';

describe('ActivityVisitsComponent', () => {
  let component: ActivityVisitsComponent;
  let fixture: ComponentFixture<ActivityVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
