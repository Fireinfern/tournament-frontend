import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { Tournament } from 'src/app/models/tournament';
import { HttpResponse } from '@angular/common/http';
import { LoginerrorComponent } from 'src/app/dialogs/loginerror/loginerror.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent {

  [x: string]: any;

  isLoading = false;
  registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    cpassword: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });



  constructor(private formBuilder: FormBuilder, private router: Router, private registerService: RegisterService, private dialog: MatDialog) {

  }
  register() {
    if (this.registerForm.value.password === this.registerForm.value.cpassword) {
      this.registerService.register(this.registerForm.value.username as string, this.registerForm.value.password as string, this.registerForm.value.email as string)
        .subscribe(


           () =>{
            
            console.log(this.registerForm.value);
            this.router.navigate(['/tournaments']);
            return;
          },
          (error) =>  {  console.log(error);
            if(error.status ===418){
            this.dialog.open(LoginerrorComponent, {
              width: '450px',
              data: { message: 'Please Enter Valid Data' }
              
            });  return;
            }
            
              this.dialog.open(LoginerrorComponent, {
                width: '450px',
                data: { message: 'User name is already exisit' }
              });
              
            return;

          }



        )
    }
    else {
      this.dialog.open(LoginerrorComponent, {
        width: '250px',
        data: { message: 'Password did not Match' }
      });
    }

  }

}
