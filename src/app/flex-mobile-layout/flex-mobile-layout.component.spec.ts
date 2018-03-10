import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexMobileLayoutComponent } from './flex-mobile-layout.component';

describe('FlexMobileLayoutComponent', () => {
  let component: FlexMobileLayoutComponent;
  let fixture: ComponentFixture<FlexMobileLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexMobileLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexMobileLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
