import { Component } from '@angular/core';
import { PlanetModel } from './planets-list/planet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public chosenPlanet = null;
  title = 'listPlanet';
  public onPlanetChosen(planet: PlanetModel) {
    this.chosenPlanet = planet;
  }
}
