import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { LoginService} from 'src/app/services/login.service';

import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
[x: string]: any;
  public username!: string;
  public password!: string;
  
  constructor(private router: Router, private loginService: LoginService){
    
  }
  login(form: NgForm) {
    if (form.valid) {
      this.loginService.authenticate(this.username, this.password)
      .subscribe((response: any) => {
        if (response) {
          this.router.navigateByUrl("/");
        }
        this['errorMessage'] = "Authentication Failed";
      })
    }
  }

}
