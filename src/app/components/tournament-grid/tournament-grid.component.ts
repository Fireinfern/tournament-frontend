import { Component } from '@angular/core';
import { Tournament } from 'src/app/models/tournament';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-tournament-grid',
  templateUrl: './tournament-grid.component.html',
  styleUrls: ['./tournament-grid.component.css']
})
export class TournamentGridComponent{

  tournaments!: Tournament[];

  constructor(private tournamentService: TournamentService) {
    tournamentService.getTournaments().subscribe(data => {
      this.tournaments = data;
    });
  }
}
