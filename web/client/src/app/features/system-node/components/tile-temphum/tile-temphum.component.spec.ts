import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileTemphumComponent } from './tile-temphum.component';

describe('TileTemphumComponent', () => {
  let component: TileTemphumComponent;
  let fixture: ComponentFixture<TileTemphumComponent>;

  beforeEach(async(() => {
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
