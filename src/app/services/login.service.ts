import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  tournamentUrl = "https://tournament-backend-yjm8.onrender.com/v1/users";


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


  constructor(private http: HttpClient) { }

  authenticate(username: String, password: String): Observable<HttpResponse<any>> {
    return this.http.post(this.tournamentUrl + "/login", {
      username: username, password: password
    }, { observe: 'response' }).pipe(catchError(this.handleError));
  }




  
}
