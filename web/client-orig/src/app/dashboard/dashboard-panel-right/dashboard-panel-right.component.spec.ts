import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPanelRightComponent } from './dashboard-panel-right.component';

describe('DashboardPanelRightComponent', () => {
  let component: DashboardPanelRightComponent;
  let fixture: ComponentFixture<DashboardPanelRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPanelRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPanelRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
