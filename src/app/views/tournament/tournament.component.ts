import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AddPlayerComponent } from 'src/app/dialogs/add-player/add-player.component';
import { Tournament } from 'src/app/models/tournament';
import { AuthService } from 'src/app/services/auth.service';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  state$!: Observable<object>;
  tournament!: Tournament;
  constructor(public activatedRoute: ActivatedRoute, public addPlayerDialog: MatDialog, private tournamentService: TournamentService, private authService: AuthService) {

  }

  openAddPlayerDialog() {
    let playerDialogRef = this.addPlayerDialog.open(AddPlayerComponent, { data: { tournament: this.tournament } });
    playerDialogRef.afterClosed().subscribe((result) => {
      this.tournament = result.tournament;
    });
  }

  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap.pipe(map(() => window.history.state));
    this.state$.subscribe(state => {
      this.tournament = state as Tournament;
    });
    console.log(this.tournament);
  }

  get isAuthenticated() {
    return this.authService.isAuthenticated;
  }
}
