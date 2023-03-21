import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { RegisterComponent } from './views/register/register.component';
import { TournamentsComponent } from './views/tournaments/tournaments.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
