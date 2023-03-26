import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from 'src/app/dialogs/delete-confirmation/delete-confirmation.component';
import { Tournament } from 'src/app/models/tournament';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-tournament-grid',
  templateUrl: './tournament-grid.component.html',
  styleUrls: ['./tournament-grid.component.css']
})
export class TournamentGridComponent {

  tournaments!: Tournament[];

  displayedColumns = ["displayName", "maxPlayers", "rounds", "actions"];

  constructor(private tournamentService: TournamentService, public confirmDeleteDialog: MatDialog) {
    this.getTournaments();
  }

  openDeleteConfirmationButton(tournament: Tournament) {
    const confirmDialogRef = this.confirmDeleteDialog.open(DeleteConfirmationComponent,
      {
        data: {
          tournament: tournament
        }
      });
    confirmDialogRef.afterClosed().subscribe((result) => {
      this.tournaments = this.tournaments.filter((tournament) =>
        tournament._id != result);
    })
  }

  getTournaments() {
    this.tournamentService.getTournaments().subscribe(data => {
      this.tournaments = data;
    });
  }
}
