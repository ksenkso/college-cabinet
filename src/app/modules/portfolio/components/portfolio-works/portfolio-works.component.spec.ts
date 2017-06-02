import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioWorksComponent } from './portfolio-works.component';

describe('PortfolioWorksComponent', () => {
  let component: PortfolioWorksComponent;
  let fixture: ComponentFixture<PortfolioWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
