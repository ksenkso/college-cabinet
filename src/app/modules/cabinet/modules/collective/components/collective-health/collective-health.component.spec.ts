import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiveHealthComponent } from './collective-health.component';

describe('CollectiveHealthComponent', () => {
  let component: CollectiveHealthComponent;
  let fixture: ComponentFixture<CollectiveHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectiveHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectiveHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
