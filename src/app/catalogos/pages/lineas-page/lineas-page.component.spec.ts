import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineasPageComponent } from './lineas-page.component';

describe('LineasPageComponent', () => {
  let component: LineasPageComponent;
  let fixture: ComponentFixture<LineasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
