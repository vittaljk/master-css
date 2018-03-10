import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexNavbarComponent } from './flex-navbar.component';

describe('FlexNavbarComponent', () => {
  let component: FlexNavbarComponent;
  let fixture: ComponentFixture<FlexNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
