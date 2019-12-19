import { Component, OnInit, Output } from '@angular/core';
import { LogicaService } from '../logica.service';
import { JogoComponent } from '../jogo/jogo.component';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.scss']
})
export class BotoesComponent implements OnInit {
  @Output() quadrados;
  constructor(private logica: LogicaService, private jogo: JogoComponent) { }

  ngOnInit() {
  }
  iniciarJogo(){
    this.logica.iniciarJogo();
  }
  resetarJogo()
  {
    this.logica.resetarJogo();
    this.jogo.quadrados = Array(9).fill(null);
  }
}
