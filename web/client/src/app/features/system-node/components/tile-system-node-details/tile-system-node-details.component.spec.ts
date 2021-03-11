import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TileSystemNodeDetailsComponent } from './tile-system-node-details.component';

describe('TileSystemNodeDetailsComponent', () => {
  let component: TileSystemNodeDetailsComponent;
  let fixture: ComponentFixture<TileSystemNodeDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TileSystemNodeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileSystemNodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
