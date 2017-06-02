import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAttachmentsComponent } from './portfolio-attachments.component';

describe('PortfolioAttachmentsComponent', () => {
  let component: PortfolioAttachmentsComponent;
  let fixture: ComponentFixture<PortfolioAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
