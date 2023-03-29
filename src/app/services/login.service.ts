import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  tournamentUrl = "https://tournament-backend-yjm8.onrender.com/v1/tournaments";
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
  
  authenticate(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.tournamentUrl + "login", {
      name: username, password: password
    }).pipe(map((response: { success: any; token: string; }) => {
      this.auth_token = response.success ? response.token : "";
      return response.success;
    }));
  }




  // login(email: string, password: string): Observable<any> {
  //   const header= new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   })
  //   const url = `${this.tournamentUrl}/login`;
  //   const body = { email, password };
  //   return this.http.post(url, body, { headers: header });
  // }
}
