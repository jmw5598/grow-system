import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChartPercentageLineComponent } from './chart-percentage-line.component';

describe('ChartPercentageLineComponent', () => {
  let component: ChartPercentageLineComponent;
  let fixture: ComponentFixture<ChartPercentageLineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPercentageLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPercentageLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
