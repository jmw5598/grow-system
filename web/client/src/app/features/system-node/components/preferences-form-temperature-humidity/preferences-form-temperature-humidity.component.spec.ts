import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PreferencesFormTemperatureHumidityComponent } from './preferences-form-temperature-humidity.component';

describe('PreferencesFormTemperatureHumidityComponent', () => {
  let component: PreferencesFormTemperatureHumidityComponent;
  let fixture: ComponentFixture<PreferencesFormTemperatureHumidityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferencesFormTemperatureHumidityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferencesFormTemperatureHumidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
