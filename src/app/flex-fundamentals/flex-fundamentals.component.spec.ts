import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexFundamentalsComponent } from './flex-fundamentals.component';

describe('FlexFundamentalsComponent', () => {
  let component: FlexFundamentalsComponent;
  let fixture: ComponentFixture<FlexFundamentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexFundamentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexFundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
