import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SystemNodeListComponent } from './system-node-list.component';

describe('SystemNodeListComponent', () => {
  let component: SystemNodeListComponent;
  let fixture: ComponentFixture<SystemNodeListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemNodeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemNodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
