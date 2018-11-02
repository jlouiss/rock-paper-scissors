import { Component } from '@angular/core';


export enum Choice {
  Rock = 0,
  Paper = 1,
  Scissors = 2
}

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent {

  public Choice = Choice;

  constructor() {
  }

  userChoice(choice: Choice) {
  }

}
