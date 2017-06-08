import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolsParentMeetingsComponent } from './protocols-parent-meetings.component';

describe('ProtocolsParentMeetingsComponent', () => {
  let component: ProtocolsParentMeetingsComponent;
  let fixture: ComponentFixture<ProtocolsParentMeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolsParentMeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolsParentMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
