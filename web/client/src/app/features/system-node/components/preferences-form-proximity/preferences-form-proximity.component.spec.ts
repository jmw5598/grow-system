import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PreferencesFormProximityComponent } from './preferences-form-proximity.component';

describe('PreferencesFormProximityComponent', () => {
  let component: PreferencesFormProximityComponent;
  let fixture: ComponentFixture<PreferencesFormProximityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferencesFormProximityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferencesFormProximityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
