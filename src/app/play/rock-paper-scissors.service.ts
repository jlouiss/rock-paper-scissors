import { Injectable } from '@angular/core';

export enum Moves {
  Rock = 'ROCK',
  Paper = 'PAPER',
  Scissors = 'SCISSORS'
}

export enum Result {
  Win = 0,
  Lose = 1,
  Tie = 2
}

@Injectable({
  providedIn: 'root'
})
export class RockPaperScissorsService {

  constructor() {
  }

  public pickComputerMove(): string {
    const length = Object.keys(Moves).length;
    const randomIndex = Math.floor(Math.random() * length);

    return Object.values(Moves)[randomIndex];
  }

  public calculateResult(userMove: string, computerMove: string) {
    if (userMove === computerMove) {
      return Result.Tie;
    }

    const userIndex = Object.values(Moves).indexOf(userMove);
    const computerIndex = Object.values(Moves).indexOf(computerMove);

    if ((userIndex - computerIndex + 3) % 3 === 1) {
      return Result.Win;
    } else {
      return Result.Lose;
    }
  }

}
