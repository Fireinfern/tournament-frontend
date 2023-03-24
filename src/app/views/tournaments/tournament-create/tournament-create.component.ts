import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.css']
})
export class TournamentCreateComponent {
  selectedPlayer: string = "";

  tournamentForm = this.formBuilder.group({
    tournamentName: ['', Validators.required],
    numberOfPlayers: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder) {

  }

  async create() {
    console.log(this.tournamentForm.value);
  }
  
}
