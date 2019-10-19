import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichtodoComponent } from './affichtodo.component';

describe('AffichtodoComponent', () => {
  let component: AffichtodoComponent;
  let fixture: ComponentFixture<AffichtodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichtodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichtodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
