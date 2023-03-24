import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tournament } from 'src/app/models/tournament';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.css']
})
export class TournamentCreateComponent {
  selectedPlayer: string = "";

  tournamentForm = this.formBuilder.nonNullable.group({
    tournamentName: ['', Validators.required],
    numberOfPlayers: ['', Validators.required]
  });

  waitingForResponse: boolean = false;

  constructor(private formBuilder: FormBuilder,
    public tournamentService: TournamentService,
    private router: Router) {

  }

  create() {
    this.waitingForResponse = true;
    console.log(this.tournamentForm.value);
    let tournament: Tournament = {};
    tournament.displayName = this.tournamentForm.value.tournamentName;
    tournament.maxPlayerAmount = Number(this.tournamentForm.value.numberOfPlayers);
    this.tournamentService.createTournament(tournament).subscribe((newTournament) => {
      if (newTournament._id) {
        this.waitingForResponse = false;
        this.router.navigate(['/tournaments']);
      }
    });
  }
  
}
