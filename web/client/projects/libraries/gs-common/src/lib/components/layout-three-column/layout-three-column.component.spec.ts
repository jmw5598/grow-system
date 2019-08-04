import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutThreeColumnComponent } from './layout-three-column.component';

describe('LayoutThreeColumnComponent', () => {
  let component: LayoutThreeColumnComponent;
  let fixture: ComponentFixture<LayoutThreeColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutThreeColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutThreeColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
