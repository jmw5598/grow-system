import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFormAddComponent } from './component-form-add.component';

describe('ComponentFormAddComponent', () => {
  let component: ComponentFormAddComponent;
  let fixture: ComponentFixture<ComponentFormAddComponent>;

  beforeEach(async(() => {
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
