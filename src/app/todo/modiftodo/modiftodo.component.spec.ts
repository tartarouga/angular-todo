import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiftodoComponent } from './modiftodo.component';

describe('ModiftodoComponent', () => {
  let component: ModiftodoComponent;
  let fixture: ComponentFixture<ModiftodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModiftodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiftodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
