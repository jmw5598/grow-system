import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponentFormComponent } from './create-component-form.component';

describe('CreateComponentFormComponent', () => {
  let component: CreateComponentFormComponent;
  let fixture: ComponentFixture<CreateComponentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComponentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
