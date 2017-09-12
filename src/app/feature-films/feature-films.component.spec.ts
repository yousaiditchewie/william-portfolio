import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureFilmsComponent } from './feature-films.component';

describe('FeatureFilmsComponent', () => {
  let component: FeatureFilmsComponent;
  let fixture: ComponentFixture<FeatureFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
