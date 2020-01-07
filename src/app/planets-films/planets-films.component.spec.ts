import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsFilmsComponent } from './planets-films.component';

describe('PlanetsFilmsComponent', () => {
  let component: PlanetsFilmsComponent;
  let fixture: ComponentFixture<PlanetsFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
