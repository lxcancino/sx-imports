import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineasTableComponent } from './lineas-table.component';

describe('LineasTableComponent', () => {
  let component: LineasTableComponent;
  let fixture: ComponentFixture<LineasTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineasTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
