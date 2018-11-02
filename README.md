# RockPaperScissors

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


---

### How I approached this test

I started by drawing on a piece of paper the pieces of the application. I figured out it would be made by 3 routes: start, play and gameover.

`/play` contains the core functionality.
`/gameover` displays the result of the game.

I used bootstrap and fontawesome since they are the most popular choices as css framework and icon system.

To figure out how to calculate the result of the game I thought over it with pen and paper because it makes me think clearly.

Given more time I would test this last funcionality with actual tests rather than tests made on paper, so it would be more maintainable and to keep it testable (e.g.: you could add variants like rock, paper, scissors, lizard, spock).

