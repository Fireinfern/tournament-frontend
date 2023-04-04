import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, NgForm, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginService} from 'src/app/services/login.service';
import { AuthService} from 'src/app/services/auth.service';
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginerrorComponent } from '../loginerror/loginerror.component';

import { error } from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
[x: string]: any;
  public username!: string;
  public password!: string;
  isLoading = false;
  loginForm = this.formBuilder.group({
    userName: ['', Validators.required,Validators.minLength(3)],
  password: ['', Validators.required]
  
  });
  constructor(private authService: AuthService,private changeDetectorRef: ChangeDetectorRef, private formBuilder: FormBuilder,private router: Router, private loginService: LoginService,private dialogRef: MatDialogRef< LoginComponent> ,private dialog: MatDialog ){
  
  }
  get f(){
    return this.loginForm.controls;
  }

  



  login() {
    this.loginService.authenticate(this.loginForm.value.userName as string, this.loginForm.value.password as string).subscribe({
      
      
      error: (error) => {   console.log(error);
        const dialogRef = this.dialog.open(LoginerrorComponent, {
          width: '450px',
          data: {message: 'Authentication failed. Please try again.'}
        });
  
        dialogRef.afterClosed().subscribe(result => {
          this.loginForm.reset();
        });

        
    },
      next: (response) => {  console.log(response.status);
        if (response.status === 202 && response.body != null && response.body.hasOwnProperty("token")) {
          localStorage.setItem("tournament-manager-token", response.body["token"]);
          console.log(response.status);
          this.dialogRef.close();
          this.authService.isAuthenticated = true;
          
          this.changeDetectorRef.detectChanges();
          return;
        }
        if (response.status === 418) {
          console.log('418');
          console.log(response.status);
          console.log("error not all things full");
          const dialogRef = this.dialog.open(LoginerrorComponent, {
            width: '450px',
            data: {message: 'Please fill the username and pasword. Please try again.'}
          });
    
          dialogRef.afterClosed().subscribe(result => {
            this.loginForm.reset();
          });
        }
        return;
    }});
  }

}
