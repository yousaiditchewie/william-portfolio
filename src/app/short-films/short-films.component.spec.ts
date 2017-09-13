import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortFilmsComponent } from './short-films.component';

describe('ShortFilmsComponent', () => {
  let component: ShortFilmsComponent;
  let fixture: ComponentFixture<ShortFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
