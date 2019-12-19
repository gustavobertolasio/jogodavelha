import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JogoComponent } from './jogo/jogo.component';
import { FormsModule } from '@angular/forms';
import { QuadradoComponent } from './quadrado/quadrado.component';
import { BotoesComponent } from './botoes/botoes.component';

@NgModule({
  declarations: [
    AppComponent,
    JogoComponent,
    QuadradoComponent,
    BotoesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
