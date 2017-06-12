import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsProblemComponent } from './parents-problem.component';

describe('ParentsProblemComponent', () => {
  let component: ParentsProblemComponent;
  let fixture: ComponentFixture<ParentsProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentsProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
