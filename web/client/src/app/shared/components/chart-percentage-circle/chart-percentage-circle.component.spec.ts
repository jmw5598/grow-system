import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPercentageCircleComponent } from './chart-percentage-circle.component';

describe('ChartPercentageCircleComponent', () => {
  let component: ChartPercentageCircleComponent;
  let fixture: ComponentFixture<ChartPercentageCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPercentageCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPercentageCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
