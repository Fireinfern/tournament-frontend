import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent {

  [x: string]: any;
  
  isLoading = false;
  registerForm = this.formBuilder.group({
    userName: ['', Validators.required],
  password: ['', Validators.required],
  email: ['', Validators.required]
  });



  constructor( private formBuilder: FormBuilder,private router: Router, private registerService: RegisterService){
    
  }
  register() {
    
    console.log(this.registerForm.value);
    
    this.registerService.register(this.registerForm.value.userName as string,this.registerForm.value.password as string,this.registerForm.value.email as string)
    .subscribe((response) => {
      if (response) {
        //this.dialogRef.close();
        return
      }
      this['errorMessage'] = "Authentication Failed";
    })
    
  }

}
