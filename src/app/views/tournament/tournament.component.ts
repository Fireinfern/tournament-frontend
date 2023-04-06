import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Tournament } from 'src/app/models/tournament';
import { AuthService } from 'src/app/services/auth.service';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit{
  state$!: Observable<object>;
  tournament!: Tournament;
  constructor(public activatedRoute: ActivatedRoute , private tournamentService: TournamentService, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap.pipe(map(() => window.history.state));
    this.state$.subscribe(state => {
      this.tournament = state as Tournament;
    })
  }

  get isAuthenticated() {
    return this.authService.isAuthenticated;
  }
}
