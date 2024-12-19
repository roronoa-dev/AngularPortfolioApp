import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPortfolioComponent } from './edit-portfolio.component';

describe('EditPortfolioComponent', () => {
  let component: EditPortfolioComponent;
  let fixture: ComponentFixture<EditPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPortfolioComponent]
    });
    fixture = TestBed.createComponent(EditPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});