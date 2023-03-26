import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Tournament } from 'src/app/models/tournament';
import { TournamentService } from 'src/app/services/tournament.service';

export interface UpdateData {
  tournament: Tournament
}

@Component({
  selector: 'app-update-tournament',
  templateUrl: './update-tournament.html',
  styleUrls: ['./update-tournament.css']
})
export class UpdateTournamentComponent {

  isLoading = false;
  tournamentForm = this.formBuilder.nonNullable.group({
    tournamentName: ['', Validators.required],
    numberOfPlayers: ['', Validators.required]
  });
  constructor(@Inject(MAT_DIALOG_DATA) public data: UpdateData,
            private tournamentService: TournamentService,
            private formBuilder: FormBuilder,
            private dialogRef: MatDialogRef<UpdateTournamentComponent>) {}
            
           
  updateTournament() {
    if (!this.data.tournament._id) {
      return;
    }
    this.dialogRef.disableClose = true;
    this.isLoading = true;
    this.data.tournament.displayName = this.tournamentForm.value.tournamentName;
    this.tournamentService.updateTournament(this.data.tournament).subscribe((response) => {
      this.dialogRef.disableClose = false;
      if (response.ok) {
        //this.data.tournament.displayName == this.tournamentForm.value.tournamentName; 
        this.dialogRef.close();
      }
    });
  }
}
