import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { LoginService} from 'src/app/services/login.service';

import { Router } from "@angular/router";
import { MatDialogRef } from '@angular/material/dialog';
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
  constructor( private formBuilder: FormBuilder,private router: Router, private loginService: LoginService,private dialogRef: MatDialogRef< LoginComponent> ){
  
  }
  login() {
    
    
      this.loginService.authenticate( this.loginForm.value.userName as string, this.loginForm.value.password as string)
      .subscribe((response) => {
        if (response) {
          this.dialogRef.close();
          return
        }
        this['errorMessage'] = "Authentication Failed";
      })
    
  }

}
