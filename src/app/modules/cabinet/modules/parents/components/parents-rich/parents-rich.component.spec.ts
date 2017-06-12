import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsRichComponent } from './parents-rich.component';

describe('ParentsRichComponent', () => {
  let component: ParentsRichComponent;
  let fixture: ComponentFixture<ParentsRichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentsRichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsRichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
