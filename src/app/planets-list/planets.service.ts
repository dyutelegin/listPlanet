import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import { Observable, forkJoin, of } from "rxjs";

@Injectable()
export class PlanetsService {
  private readonly ADDRESS = "https://swapi.co/api/planets/";
  private readonly ADDRESS_FILMS = "https://swapi.co/api/films/";
  public constructor(private http: HttpClient) {}

  public getFirstPage() {
    return this.http.get(this.ADDRESS).pipe(
      map((response: any) => {
        response.results = response.results.slice(0, 5);
        response.results.forEach(element => {
          element.id = element.url.replace(this.ADDRESS, "").replace("/", "");
        });

        return response;
      })
    );
  }

  public getPage(pageSize: number, page: number = 1) {
    let pageNumbers = this.getApiPageNumbers(pageSize, page);
    return forkJoin(
      pageNumbers.map(pageNumber => this.getSingleApiPage(pageNumber))
    ).pipe(
      map(pages => {
        if (pageSize == 5) {
          if (page % 2 == 0) {
            return pages[0].slice(5);
          } else {
            return pages[0].slice(0, 5);
          }
        }

        return [].concat.apply([], pages);
      })
    );
  }

  public getFilmsId() {
    return this.http.get(this.ADDRESS_FILMS).pipe(
      map((response: any) => {
        let films = response.results;
        films.forEach(element => {
          element.id = element.films
            .replace(this.ADDRESS_FILMS, "")
            .replace("/", "");
        });

        return films;
      })
    );
  }

  public getPlanet(planetId: string) {
    return this.http.get(this.ADDRESS + planetId).pipe(
      map((response: any) => {
        response.films = response.films.map(film => {
          return film.replace(this.ADDRESS_FILMS, "").replace("/", "");
        });

        return response;
      })
    );
  }

  public getSearch(string: string) {
    return this.http.get(this.ADDRESS + "?search=" + string).pipe(
      map((response: any) => {
        let planets = response.results;
        planets.forEach(element => {
          element.id = element.url.replace(this.ADDRESS, "").replace("/", "");
        });

        return planets;
      })
    );
  }

  private getApiPageNumbers(pageSize, page): number[] {
    switch (pageSize) {
      case 5:
        return [Math.floor((page + 1) / 2)];

      case 10:
        return [page];

      case 100:
        return [
          10 * (page - 1) + 1,
          10 * (page - 1) + 2,
          10 * (page - 1) + 3,
          10 * (page - 1) + 4,
          10 * (page - 1) + 5,
          10 * (page - 1) + 6,
          10 * (page - 1) + 7,
          10 * (page - 1) + 8,
          10 * (page - 1) + 9,
          10 * (page - 1) + 10
        ];
    }
  }

  private getSingleApiPage(page: number): Observable<any> {
    return this.http.get(this.ADDRESS + "?page=" + page).pipe(
      map((response: any) => {
        let planets = response.results;
        planets.forEach(element => {
          element.id = element.url.replace(this.ADDRESS, "").replace("/", "");
        });

        return planets;
      }),
      catchError(err => {
        return of([]);
      })
    );
  }
}
