import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemNodeDetailsComponent } from './system-node-details.component';

describe('SystemNodeDetailsComponent', () => {
  let component: SystemNodeDetailsComponent;
  let fixture: ComponentFixture<SystemNodeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemNodeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemNodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
