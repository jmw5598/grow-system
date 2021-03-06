import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencesFormProximityComponent } from './preferences-form-proximity.component';

describe('PreferencesFormProximityComponent', () => {
  let component: PreferencesFormProximityComponent;
  let fixture: ComponentFixture<PreferencesFormProximityComponent>;

  beforeEach(async(() => {
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
