import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveWebsiteComponent } from './responsive-website.component';

describe('ResponsiveWebsiteComponent', () => {
  let component: ResponsiveWebsiteComponent;
  let fixture: ComponentFixture<ResponsiveWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
