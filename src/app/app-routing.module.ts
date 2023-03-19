import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TournamentsComponent } from './views/tournaments/tournaments.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tournaments', component: TournamentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
