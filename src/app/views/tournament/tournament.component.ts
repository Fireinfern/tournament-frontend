import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AddPlayerComponent } from 'src/app/dialogs/add-player/add-player.component';
import { Tournament } from 'src/app/models/tournament';
import { AuthService } from 'src/app/services/auth.service';
import { TournamentService } from 'src/app/services/tournament.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { WinnerComponent } from 'src/app/dialogs/winner/winner.component';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  state$!: Observable<object>;
  tournament!: Tournament;
  constructor(public activatedRoute: ActivatedRoute, public addPlayerDialog: MatDialog, private tournamentService: TournamentService, private authService: AuthService, private dialog: MatDialog) {

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
      this.tournament.winner = [];

      this.tournament.rounds?.forEach((round) => {
        this.tournament.winner?.push(...round.winners);
      });
      this.checkTournamentOver();
    });
}
checkTournamentOver() {

  if (this.tournament && this.tournament.rounds) {
    const numRounds = this.tournament.rounds.length;
    const lastRound = this.tournament.rounds[numRounds - 1];
    if (lastRound && lastRound.winners) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {winners : lastRound.winners};
      dialogConfig.hasBackdrop = true;
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      const dialogRef = this.dialog.open(WinnerComponent, dialogConfig);
    }
  }
}
  get isAuthenticated() {
    return this.authService.isAuthenticated;
  }

 

  
}
