import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullyBleedBlogLayoutComponent } from './fully-bleed-blog-layout.component';

describe('FullyBleedBlogLayoutComponent', () => {
  let component: FullyBleedBlogLayoutComponent;
  let fixture: ComponentFixture<FullyBleedBlogLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullyBleedBlogLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullyBleedBlogLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
