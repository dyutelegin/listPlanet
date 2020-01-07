import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsDetailsComponent } from './planets-details/planets-details.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetsFilmsComponent } from './planets-films/planets-films.component';
import { PlanetsPeopleComponent } from './planets-people/planets-people.component';


const appRoutes: Routes = [
  { path: '', component: PlanetsListComponent },
  { path: ':id',      component: PlanetsDetailsComponent },
  { path: 'films/:id',      component: PlanetsFilmsComponent },
  { path: 'people/:id',      component: PlanetsPeopleComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
