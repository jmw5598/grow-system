import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPanelLeftComponent } from './dashboard-panel-left.component';

describe('DashboardPanelLeftComponent', () => {
  let component: DashboardPanelLeftComponent;
  let fixture: ComponentFixture<DashboardPanelLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPanelLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPanelLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
