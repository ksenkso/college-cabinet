import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenstGuardedComponent } from './parents-guarded.component';

describe('ParenstGuardedComponent', () => {
  let component: ParenstGuardedComponent;
  let fixture: ComponentFixture<ParenstGuardedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenstGuardedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenstGuardedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
