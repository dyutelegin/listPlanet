import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlanetsListComponent } from "./planets-list/planets-list.component";
import { PlanetsService } from "./planets-list/planets.service";
import { HttpClientModule } from "@angular/common/http";
import { PlanetsDetailsComponent } from "./planets-details/planets-details.component";
import { PlanetsFilmsComponent } from "./planets-films/planets-films.component";
import { PlanetsPeopleComponent } from "./planets-people/planets-people.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent,
    PlanetsDetailsComponent,
    PlanetsFilmsComponent,
    PlanetsPeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
