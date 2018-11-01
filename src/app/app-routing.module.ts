import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayComponent } from './play/play.component';
import { GameoverComponent } from './gameover/gameover.component';
import { StartComponent } from './start/start.component';


const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'play', component: PlayComponent },
  { path: 'gameover', component: GameoverComponent },
  { path: '**', redirectTo: 'start' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
