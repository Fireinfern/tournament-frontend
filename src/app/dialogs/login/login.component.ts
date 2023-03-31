import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { LoginService} from 'src/app/services/login.service';

import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginerrorComponent } from '../loginerror/loginerror.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
[x: string]: any;
  public username!: string;
  public password!: string;
  isLoading = false;
  loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
  password: ['', Validators.required]
  });
  constructor( private formBuilder: FormBuilder,private router: Router, private loginService: LoginService,private dialogRef: MatDialogRef< LoginComponent> ,private dialog: MatDialog ){
  
  }
  login() {
    
    
      this.loginService.authenticate( this.loginForm.value.userName as string, this.loginForm.value.password as string)
      .subscribe((response) => { console.log(response);
        if (response.status === 202) {
          this.dialogRef.close();
          return;
        }
        else {
          const dialogRef = this.dialog.open(LoginerrorComponent, {
            width: '450px',
            data: {message: 'Authentication failed. Please try again.'}
          });
    
          dialogRef.afterClosed().subscribe(result => {
            this.loginForm.reset();
          });
      }});
    
  }

}
