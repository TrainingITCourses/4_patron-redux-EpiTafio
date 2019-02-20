import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosPresenterComponent } from './filtros-presenter.component';

describe('FiltrosPresenterComponent', () => {
  let component: FiltrosPresenterComponent;
  let fixture: ComponentFixture<FiltrosPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrosPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
