import { Component } from '@angular/core';

import { Moves, RockPaperScissorsService } from './rock-paper-scissors.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent {

  public Moves = Moves;
  computerMove = null;
  lock = false;

  constructor(private rockPaperScissorsService: RockPaperScissorsService, private router: Router) {
  }

  pick(move: string) {
    this.lock = true;
    this.computerMove = this.rockPaperScissorsService.pickComputerMove();
    const gameResult = this.rockPaperScissorsService.calculateResult(move, this.computerMove);
    setTimeout(() => this.router.navigate(['/gameover', gameResult]), 1000);
  }

}
