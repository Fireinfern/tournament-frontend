import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as confetti from 'canvas-confetti';
import { Player } from 'src/app/models/player';

interface WinnerData {
  winners: Player[];
}

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent {
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: WinnerData) {
    
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
  
    confetti.create(canvas, {
      resize: true,
      useWorker: true,
    })({ particleCount: 200, spread: 200 });
  
    setTimeout(() => {
      document.body.removeChild(canvas);
    }, 5000);
  }
  }

