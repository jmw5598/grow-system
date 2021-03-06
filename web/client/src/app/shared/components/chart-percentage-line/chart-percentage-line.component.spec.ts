import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPercentageLineComponent } from './chart-percentage-line.component';

describe('ChartPercentageLineComponent', () => {
  let component: ChartPercentageLineComponent;
  let fixture: ComponentFixture<ChartPercentageLineComponent>;

  beforeEach(async(() => {
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
