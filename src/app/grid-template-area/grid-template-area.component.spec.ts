import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTemplateAreaComponent } from './grid-template-area.component';

describe('GridTemplateAreaComponent', () => {
  let component: GridTemplateAreaComponent;
  let fixture: ComponentFixture<GridTemplateAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTemplateAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTemplateAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
