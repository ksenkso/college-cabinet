import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetIndexComponent } from './cabinet-index.component';

describe('CabinetIndexComponent', () => {
  let component: CabinetIndexComponent;
  let fixture: ComponentFixture<CabinetIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinetIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
