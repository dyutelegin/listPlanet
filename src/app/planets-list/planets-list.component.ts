import { Component, OnInit, ViewChild } from "@angular/core";
import { PlanetsService } from "./planets.service";
import { MatPaginator, PageEvent } from "@angular/material";

@Component({
  selector: "app-planets-list",
  templateUrl: "./planets-list.component.html",
  styleUrls: ["./planets-list.component.css"]
})
export class PlanetsListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  public planetsList = [];
  length = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 100];
  constructor(private planetService: PlanetsService) {}

  ngOnInit() {
    this.planetService.getFirstPage().subscribe(response => {
      this.planetsList = response.results;
      this.length = response.count;
    });
  }

  public onSearch(event: Event) {
    this.planetService
      .getSearch((<HTMLInputElement>event.target).value)
      .subscribe(planets => (this.planetsList = planets));
  }

  onPageChange(event: PageEvent) {
    this.planetService
      .getPage(event.pageSize, event.pageIndex + 1)
      .subscribe(planets => (this.planetsList = planets));
  }
}
