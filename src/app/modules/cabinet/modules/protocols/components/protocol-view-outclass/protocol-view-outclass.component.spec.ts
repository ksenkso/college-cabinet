import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolViewOutclassComponent } from './protocol-view-outclass.component';

describe('ProtocolViewOutclassComponent', () => {
  let component: ProtocolViewOutclassComponent;
  let fixture: ComponentFixture<ProtocolViewOutclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolViewOutclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolViewOutclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
