import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFitComponent } from './auto-fit.component';

describe('AutoFitComponent', () => {
  let component: AutoFitComponent;
  let fixture: ComponentFixture<AutoFitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoFitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
