import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumLayoutsComponent } from './album-layouts.component';

describe('AlbumLayoutsComponent', () => {
  let component: AlbumLayoutsComponent;
  let fixture: ComponentFixture<AlbumLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
