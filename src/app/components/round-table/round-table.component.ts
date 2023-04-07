import { Component, Input } from '@angular/core';
import { Round } from 'src/app/models/round';

@Component({
  selector: 'app-round-table',
  templateUrl: './round-table.component.html',
  styleUrls: ['./round-table.component.css']
})
export class RoundTableComponent {
  @Input() round!: Round;
  constructor() {

  }
}
