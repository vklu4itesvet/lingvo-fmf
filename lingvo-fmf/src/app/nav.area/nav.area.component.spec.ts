import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav.NavAreaComponent } from './nav.area.component';

describe('Nav.AreaComponent', () => {
  let component: Nav.AreaComponent;
  let fixture: ComponentFixture<Nav.AreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nav.AreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nav.AreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
