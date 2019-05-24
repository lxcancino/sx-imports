import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcFieldComponent } from './tc-field.component';

describe('TcFieldComponent', () => {
  let component: TcFieldComponent;
  let fixture: ComponentFixture<TcFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
