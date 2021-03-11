import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GridContainerComponent } from './grid-container.component';

describe('GridContainerComponent', () => {
  let component: GridContainerComponent;
  let fixture: ComponentFixture<GridContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GridContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
