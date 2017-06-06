import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesIndexComponent } from './activities-index.component';

describe('ActivitiesIndexComponent', () => {
  let component: ActivitiesIndexComponent;
  let fixture: ComponentFixture<ActivitiesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
