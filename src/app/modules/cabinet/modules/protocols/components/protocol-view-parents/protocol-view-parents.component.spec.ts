import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolViewParentsComponent } from './protocol-view-parents.component';

describe('ProtocolViewParentsComponent', () => {
  let component: ProtocolViewParentsComponent;
  let fixture: ComponentFixture<ProtocolViewParentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolViewParentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolViewParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
