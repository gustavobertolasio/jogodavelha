import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { QuadradoComponent } from '../quadrado/quadrado.component'
import { LogicaService } from '../logica.service'
@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.scss']
})
export class JogoComponent implements OnInit {
  quadrados: string[] = Array(9).fill(null);
  jogador: string;

  constructor(private logica: LogicaService) { this.logica.iniciarJogo(); }

  ngOnInit() {

    this.logica.inicio = false;
  }
  marcar(campo: number) {
    this.logica.marcar(campo);
    this.quadrados = this.logica.quadrados;
  }
}

