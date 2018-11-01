import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayComponent } from './play/play.component';
import { GameoverComponent } from './gameover/gameover.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    GameoverComponent
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
