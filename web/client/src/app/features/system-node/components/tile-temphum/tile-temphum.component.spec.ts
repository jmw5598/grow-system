import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TileTemphumComponent } from './tile-temphum.component';

describe('TileTemphumComponent', () => {
  let component: TileTemphumComponent;
  let fixture: ComponentFixture<TileTemphumComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TileTemphumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileTemphumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
