import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCreativeComponent } from './portfolio-creative.component';

describe('PortfolioCreativeComponent', () => {
  let component: PortfolioCreativeComponent;
  let fixture: ComponentFixture<PortfolioCreativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioCreativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCreativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
