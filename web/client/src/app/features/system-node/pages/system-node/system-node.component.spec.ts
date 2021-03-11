import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SystemNodeComponent } from './system-node.component';

describe('SystemNodeComponent', () => {
  let component: SystemNodeComponent;
  let fixture: ComponentFixture<SystemNodeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
