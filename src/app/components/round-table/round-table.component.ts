import { Component, Input, OnInit } from '@angular/core';
import { Round } from 'src/app/models/round';
import { AuthService } from 'src/app/services/auth.service';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-round-table',
  templateUrl: './round-table.component.html',
  styleUrls: ['./round-table.component.css']
})
export class RoundTableComponent implements OnInit {
  @Input() round!: Round;
  @Input() tournamentId?: string; 

  constructor(public authService: AuthService, public tournamentService: TournamentService) {
  }

  ngOnInit(): void {
    this.reloadWinnerPlayers();
  }

  get isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  selectPlayerAsWinner(roundId?: string, playerId?: string) {
    if (!this.tournamentId) return;
    this.tournamentService.setPlayerAsWinnerOfRound(this.tournamentId, roundId!, playerId!).subscribe((response) => {
      let round = response.body?.rounds?.find((round) => (round._id == roundId));
      this.round = round || this.round;
      this.reloadWinnerPlayers();
    });
  }

  private reloadWinnerPlayers() {
    this.round.players.map((player) => {
      if (this.round.winners.find((winner) => (winner._id == player._id))) {
        player.isWinner = true;
      }
    });
  }
}
