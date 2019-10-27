import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileSystemNodeDetailsComponent } from './tile-system-node-details.component';

describe('TileSystemNodeDetailsComponent', () => {
  let component: TileSystemNodeDetailsComponent;
  let fixture: ComponentFixture<TileSystemNodeDetailsComponent>;

  beforeEach(async(() => {
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
