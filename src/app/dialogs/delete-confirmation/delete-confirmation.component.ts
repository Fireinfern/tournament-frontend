import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Tournament } from 'src/app/models/tournament';
import { TournamentService } from 'src/app/services/tournament.service';

export interface DeleteConfirmData {
  tournament: Tournament
}

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent {

  isLoading = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DeleteConfirmData,
            private tournamentService: TournamentService,
            private dialogRef: MatDialogRef<DeleteConfirmationComponent>) {}

  deleteTournament() {
    if (!this.data.tournament._id) return;
    this.dialogRef.disableClose = true;
    this.isLoading = true;
    this.tournamentService.deleteTournament(this.data.tournament._id).subscribe((value) => {
      this.dialogRef.disableClose = false;
      if (value.ok) {
        this.dialogRef.close(this.data.tournament._id);
        return;
      }
      return;
    });
  }
}
