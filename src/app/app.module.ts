import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayComponent } from './play/play.component';
import { GameoverComponent } from './gameover/gameover.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    GameoverComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
