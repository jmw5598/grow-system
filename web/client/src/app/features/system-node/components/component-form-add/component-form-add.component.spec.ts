import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComponentFormAddComponent } from './component-form-add.component';

describe('ComponentFormAddComponent', () => {
  let component: ComponentFormAddComponent;
  let fixture: ComponentFixture<ComponentFormAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentFormAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
