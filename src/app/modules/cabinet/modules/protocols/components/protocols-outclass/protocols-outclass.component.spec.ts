import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolsOutclassComponent } from './protocols-outclass.component';

describe('ProtocolsOutclassComponent', () => {
  let component: ProtocolsOutclassComponent;
  let fixture: ComponentFixture<ProtocolsOutclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolsOutclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolsOutclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
