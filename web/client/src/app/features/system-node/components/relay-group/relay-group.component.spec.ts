import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelayGroupComponent } from './relay-group.component';

describe('RelayGroupComponent', () => {
  let component: RelayGroupComponent;
  let fixture: ComponentFixture<RelayGroupComponent>;

  beforeEach(async(() => {
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
