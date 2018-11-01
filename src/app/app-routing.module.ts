import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';
import { GameoverComponent } from './gameover/gameover.component';


const routes: Routes = [
  { path: '', component: AppComponent },
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
