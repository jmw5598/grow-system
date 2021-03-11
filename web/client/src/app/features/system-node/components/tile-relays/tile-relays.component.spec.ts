import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TileRelaysComponent } from './tile-relays.component';

describe('TileRelaysComponent', () => {
  let component: TileRelaysComponent;
  let fixture: ComponentFixture<TileRelaysComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TileRelaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileRelaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
