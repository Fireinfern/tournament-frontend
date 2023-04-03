<<<<<<< HEAD
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, NgForm, Validators } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { LoginService} from 'src/app/services/login.service';
import { AuthService} from 'src/app/services/auth.service';
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginerrorComponent } from '../loginerror/loginerror.component';

import { error } from 'jquery';
=======
import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { LoginService} from 'src/app/services/login.service';

import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginerrorComponent } from '../loginerror/loginerror.component';
>>>>>>> origin/feature/login_register_services
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
<<<<<<< HEAD
export class LoginComponent  {
  
=======
export class LoginComponent {
>>>>>>> origin/feature/login_register_services
[x: string]: any;
  public username!: string;
  public password!: string;
  isLoading = false;
  loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
  password: ['', Validators.required]
  });
<<<<<<< HEAD
  constructor(private authService: AuthService,private changeDetectorRef: ChangeDetectorRef, private formBuilder: FormBuilder,private router: Router, private loginService: LoginService,private dialogRef: MatDialogRef< LoginComponent> ,private dialog: MatDialog ){
  
  }

  



  login() {
    this.loginService.authenticate(this.loginForm.value.userName as string, this.loginForm.value.password as string).subscribe({
      
      
      error: (error) => {   console.log(error);
=======
  constructor( private formBuilder: FormBuilder,private router: Router, private loginService: LoginService,private dialogRef: MatDialogRef< LoginComponent> ,private dialog: MatDialog ){
  
  }
  login() {
    this.loginService.authenticate(this.loginForm.value.userName as string, this.loginForm.value.password as string).subscribe({
      error: () => {
>>>>>>> origin/feature/login_register_services
        const dialogRef = this.dialog.open(LoginerrorComponent, {
          width: '450px',
          data: {message: 'Authentication failed. Please try again.'}
        });
  
        dialogRef.afterClosed().subscribe(result => {
          this.loginForm.reset();
        });
<<<<<<< HEAD

        
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
=======
    },
      next: (response) => {
        if (response.status == 202 && response.body != null && response.body.hasOwnProperty("token")) {
          localStorage.setItem("tournament-manager-token", response.body["token"]);
          this.dialogRef.close();
          return;
        }
        if (response.status == 418) {
          console.log("error not all things full");
>>>>>>> origin/feature/login_register_services
        }
        return;
    }});
  }

}
