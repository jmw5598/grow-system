import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PreferencesFormRelayComponent } from './preferences-form-relay.component';

describe('PreferencesFormRelayComponent', () => {
  let component: PreferencesFormRelayComponent;
  let fixture: ComponentFixture<PreferencesFormRelayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferencesFormRelayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferencesFormRelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
