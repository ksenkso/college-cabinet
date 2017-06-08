import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolsIndexComponent } from './protocols-index.component';

describe('ProtocolsIndexComponent', () => {
  let component: ProtocolsIndexComponent;
  let fixture: ComponentFixture<ProtocolsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
