import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPortfolioComponent } from './view-portfolio.component';

describe('ViewPortfolioComponent', () => {
  let component: ViewPortfolioComponent;
  let fixture: ComponentFixture<ViewPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPortfolioComponent]
    });
    fixture = TestBed.createComponent(ViewPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
