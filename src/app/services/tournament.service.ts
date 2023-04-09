import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tournament } from '../models/tournament';
import { Player } from '../models/player'; // Import the Player interface if you have it

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  tournamentUrl = "https://tournament-backend-yjm8.onrender.com/v1/tournaments";

  httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    }
    else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(() => (new Error("Something went wrong, try again later")));
  }

  constructor(private http: HttpClient) {
  }

  getTournaments(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(this.tournamentUrl).pipe(catchError(this.handleError));
  }

  createTournament(tournament: Tournament): Observable<Tournament> {
    let httpHeader = new HttpHeaders({ Authorization: `Bearer ${localStorage.getItem("tournament-manager-token")}` });
    return this.http.post<Tournament>(this.tournamentUrl + "/add", tournament, { headers: httpHeader }).pipe(catchError(this.handleError));
  }

  updateTournament(tournament: Tournament): Observable<HttpResponse<Tournament>> {
    const url = `${this.tournamentUrl}/${tournament._id}`;
    let httpHeader = new HttpHeaders({ Authorization: `Bearer ${localStorage.getItem("tournament-manager-token")}` });
    return this.http.put<Tournament>(url, tournament, { headers: httpHeader, observe: 'response' });
    //return this.http.put<Tournament>(`${this.tournamentUrl}/${tournament._id}`,tournament,{ observe: 'response'});
  }
  deleteTournament(id: String): Observable<HttpResponse<Tournament>> {
    let httpHeader = new HttpHeaders({ Authorization: `Bearer ${localStorage.getItem("tournament-manager-token")}` });
    return this.http.delete<Tournament>(`${this.tournamentUrl}/${id}`, { headers: httpHeader, observe: 'response' });
  }

  addPlayerToTournament(tournamentId: string, player: Player): Observable<HttpResponse<Tournament>> {
    const url = `${this.tournamentUrl}/${tournamentId}/add-player`;
    let httpHeader = new HttpHeaders({ Authorization: `Bearer ${localStorage.getItem("tournament-manager-token")}` });
    return this.http.post<Player>(url, {displayName: player.displayName}, { headers: httpHeader, observe: 'response'}).pipe(catchError(this.handleError));
  }

  setPlayerAsWinnerOfRound(tournamentId: string, roundId: string, playerId: string): Observable<HttpResponse<Tournament>> {
    const url = `${this.tournamentUrl}/${tournamentId}/rounds/${roundId}/players/${playerId}/select-as-winner`;
    let httpHeader = new HttpHeaders({ Authorization: `Bearer ${localStorage.getItem("tournament-manager-token")}` });
    return this.http.post(url, {}, {headers: httpHeader, observe: 'response'}).pipe(catchError(this.handleError));
  }
}
