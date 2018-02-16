import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumLayoutComponent } from './medium-layout.component';

describe('MediumLayoutComponent', () => {
  let component: MediumLayoutComponent;
  let fixture: ComponentFixture<MediumLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
