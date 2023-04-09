import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TournamentsComponent } from './views/tournaments/tournaments.component';
import { TournamentGridComponent } from './components/tournament-grid/tournament-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LayoutModule } from '@angular/cdk/layout';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './dialogs/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './views/contact/contact.component';
import {MatMenuModule} from '@angular/material/menu';
import { TournamentCreateComponent } from './views/tournaments/tournament-create/tournament-create.component';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteConfirmationComponent } from './dialogs/delete-confirmation/delete-confirmation.component';
import { UpdateTournamentComponent } from './dialogs/update/update-tournament';
import { LoginerrorComponent } from './dialogs/loginerror/loginerror.component';
import { TournamentComponent } from './views/tournament/tournament.component';
import { RoundTableComponent } from './components/round-table/round-table.component';
import { AddPlayerComponent } from './dialogs/add-player/add-player.component';
@NgModule({
  declarations: [
    AppComponent,
    TournamentsComponent,
    TournamentGridComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    ContactComponent,
    TournamentCreateComponent,
    DeleteConfirmationComponent,
    UpdateTournamentComponent,
    LoginerrorComponent,
    TournamentComponent,
    RoundTableComponent,
    AddPlayerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    LayoutModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
