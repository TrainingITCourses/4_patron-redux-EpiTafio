import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoPresenterComponent } from './resultado-presenter.component';

describe('ResultadoPresenterComponent', () => {
  let component: ResultadoPresenterComponent;
  let fixture: ComponentFixture<ResultadoPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
