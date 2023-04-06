import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { RegisterComponent } from './views/register/register.component';
import { TournamentCreateComponent } from './views/tournaments/tournament-create/tournament-create.component';
import { TournamentsComponent } from './views/tournaments/tournaments.component';
import { TournamentComponent } from './views/tournament/tournament.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'tournaments', component: TournamentsComponent
  },
  {
    path: 'tournament', component: TournamentComponent
  },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'tournaments/create', component: TournamentCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
