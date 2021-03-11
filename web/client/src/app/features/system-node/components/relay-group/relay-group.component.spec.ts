import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RelayGroupComponent } from './relay-group.component';

describe('RelayGroupComponent', () => {
  let component: RelayGroupComponent;
  let fixture: ComponentFixture<RelayGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RelayGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelayGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
