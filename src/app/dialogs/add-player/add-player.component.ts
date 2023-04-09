import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { Tournament } from 'src/app/models/tournament';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  isLoading = false;

  addPlayerForm = this.formBuilder.nonNullable.group({
    playerName: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dialogRef: MatDialogRef<AddPlayerComponent>,
    private tournamentService: TournamentService,
    @Inject(MAT_DIALOG_DATA) public data: { tournament: Tournament }
  ) { }

  ngOnInit(): void { }

  addPlayer() {
    if (this.addPlayerForm.invalid) {
      return;
    }
    this.dialogRef.disableClose = true;
    this.isLoading = true;
    //here we are creating the player

    const playerName = this.addPlayerForm.value.playerName || '';
    const tournamentId = this.data.tournament._id || '';
  
    // Creating the new Player object with the correct structure
    const newPlayer: Player = {
      _id: '',
      displayName: playerName,
    };
  
    this.tournamentService.addPlayerToTournament(tournamentId, newPlayer).subscribe((response) => {
      this.dialogRef.disableClose = false;
      this.isLoading = false;
      if (response.ok) {
        this.dialogRef.close();
      }
    }, (error) => {
      this.dialogRef.disableClose = false;
      this.isLoading = false;
      console.error('Error adding player:', error);
    });
    //Until here  

  }
}
