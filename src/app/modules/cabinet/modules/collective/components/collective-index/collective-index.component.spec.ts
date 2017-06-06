import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiveIndexComponent } from './collective-index.component';

describe('CollectiveIndexComponent', () => {
  let component: CollectiveIndexComponent;
  let fixture: ComponentFixture<CollectiveIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectiveIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectiveIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
