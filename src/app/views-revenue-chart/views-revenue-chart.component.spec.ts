import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsRevenueChartComponent } from './views-revenue-chart.component';

describe('ViewsRevenueChartComponent', () => {
  let component: ViewsRevenueChartComponent;
  let fixture: ComponentFixture<ViewsRevenueChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewsRevenueChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewsRevenueChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
