import { Component, OnInit, Input } from "@angular/core";
import { PlanetModel } from "../planets-list/planet.model";
import { PlanetsService } from "../planets-list/planets.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-planets-details",
  templateUrl: "./planets-details.component.html",
  styleUrls: ["./planets-details.component.css"]
})
export class PlanetsDetailsComponent implements OnInit {
  public planet: PlanetModel;
  constructor(
    private planetService: PlanetsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.planetService
        .getPlanet(params["id"])
        .subscribe(planet => (this.planet = <PlanetModel>planet));
    });
  }
}
