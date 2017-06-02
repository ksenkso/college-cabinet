import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioParticipationsComponent } from './portfolio-participations.component';

describe('PortfolioParticipationsComponent', () => {
  let component: PortfolioParticipationsComponent;
  let fixture: ComponentFixture<PortfolioParticipationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioParticipationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioParticipationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
