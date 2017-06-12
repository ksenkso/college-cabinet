import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsPoorComponent } from './parents-poor.component';

describe('ParentsPoorComponent', () => {
  let component: ParentsPoorComponent;
  let fixture: ComponentFixture<ParentsPoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentsPoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsPoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
