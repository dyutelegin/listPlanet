import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsPeopleComponent } from './planets-people.component';

describe('PlanetsPeopleComponent', () => {
  let component: PlanetsPeopleComponent;
  let fixture: ComponentFixture<PlanetsPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
