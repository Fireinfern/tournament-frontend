import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-loginerror',
  templateUrl: './loginerror.component.html',
  styleUrls: ['./loginerror.component.css']
})
export class LoginerrorComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
