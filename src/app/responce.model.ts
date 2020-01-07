import { PlanetModel } from "./planets-list/planet.model";

export class ResponceModel {
  next: string;
  previous: string;
  results: Array<PlanetModel>;
}
