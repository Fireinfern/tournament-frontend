import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  tournamentUrl = "https://tournament-backend-yjm8.onrender.com/v1";
  auth_token!: string;
  

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


  constructor(private http: HttpClient) {}
  
  register(username: string, password: string, email:string): Observable<boolean> {
    return this.http.post<any>(this.tournamentUrl + "/register", {
      username: username, password: password, email: email
    }).pipe(map((response: { success: any; token: string; }) => {
      this.auth_token = response.success ? response.token : "";
      return response.success;
    }));
}
