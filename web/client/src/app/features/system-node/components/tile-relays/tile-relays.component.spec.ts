import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileRelaysComponent } from './tile-relays.component';

describe('TileRelaysComponent', () => {
  let component: TileRelaysComponent;
  let fixture: ComponentFixture<TileRelaysComponent>;

  beforeEach(async(() => {
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
