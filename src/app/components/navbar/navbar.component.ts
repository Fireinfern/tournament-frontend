import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/dialogs/login/login.component';
import { AuthService } from 'src/app/services/auth.service';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
 
  isLoggedIn = false;
  constructor(private router: Router,private authService: AuthService,public dialog: MatDialog,private changeDetectorRef: ChangeDetectorRef) {

  }
  get isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  openLoginDialog(): void {
    const loginDialogRef = this.dialog.open(LoginComponent);
  }
  logout() {
    this.authService.isAuthenticated = false;
    this.router.navigateByUrl("/");
  }

  
}
