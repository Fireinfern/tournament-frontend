import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tournament } from '../models/tournament';

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
    return this.http.post<Tournament>(this.tournamentUrl + "/add", tournament).pipe(catchError(this.handleError));
  }
 
  updateTournament(tournament:Tournament): Observable<HttpResponse<Tournament>> {
    const url = `${this.tournamentUrl}/${tournament._id}`;
    return this.http.put<Tournament>(url, tournament, { observe: 'response' });
    //return this.http.put<Tournament>(`${this.tournamentUrl}/${tournament._id}`,tournament,{ observe: 'response'});
  }
  deleteTournament(id: String): Observable<HttpResponse<Tournament>> {
    return this.http.delete<Tournament>(`${this.tournamentUrl}/${id}`,{ observe: 'response'});
  }
}
