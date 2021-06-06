import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCounter2Component } from './my-counter2.component';

describe('MyCounter2Component', () => {
  let component: MyCounter2Component;
  let fixture: ComponentFixture<MyCounter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCounter2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCounter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
