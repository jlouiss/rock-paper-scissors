import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Result } from '../play/rock-paper-scissors.service';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.scss']
})
export class GameoverComponent implements OnInit {
  result = null;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const subscription = this.route.params
      .pipe(
        tap(params => {
            if (isNullOrUndefined(params.result)) {
              this.router.navigate(['/start']);
            }
          }
        ),
        map(params => parseInt(params.result, 10))
      )
      .subscribe(result => {
          if (result === Result.Win) {
            this.result = 'You win!';
          } else if (result === Result.Lose) {
            this.result = 'You lose';
          } else {
            this.result = 'It\'s a tie!';
          }
        },
        console.error,
        () => subscription.unsubscribe()
      );
  }

}
