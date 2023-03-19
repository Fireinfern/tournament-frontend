import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/dialogs/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public dialog: MatDialog) {

  }

  openLoginDialog(): void {
    const loginDialogRef = this.dialog.open(LoginComponent);
  }
}
