import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsIndexComponent } from './parents-index.component';

describe('ParentsIndexComponent', () => {
  let component: ParentsIndexComponent;
  let fixture: ComponentFixture<ParentsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
