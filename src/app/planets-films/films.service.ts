import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PlanetsService } from "../planets-list/planets.service";
import {map} from 'rxjs/operators';

@Injectable()
export class FilmsService {
  private readonly ADDRESS_FILMS  = 'https://swapi.co/api/films/';
  public constructor(private http: HttpClient,
    private planetService: PlanetsService,) {}

  public getFilms(filmsId: string) {
    return this.http.get(this.ADDRESS_FILMS + this.planetService.getFilmsId());
  }

}