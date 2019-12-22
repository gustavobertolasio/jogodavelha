import { Injectable, Input, Output } from '@angular/core';
import { JogoComponent } from './jogo/jogo.component';
@Injectable({
  providedIn: 'root'
})
export class LogicaService {
  quadrados: string[];
  jogador: string;
  vencedor: boolean;
  inicio: boolean = false;
  empate: boolean = false;
  constructor() { }

  marcar(botao: number): void {
    if (this.inicio && !this.vencedor) {
      if (!this.quadrados[botao]) {
        this.quadrados[botao] = this.jogador;
        this.verificarVencedor();
      }
      console.log(this.quadrados);
      if (!this.vencedor && !this.empate)
        this.trocarJogador();
      else if (this.empate)
        alert("Empatou! Resete o jogo")
      else
        alert("jogador " + this.jogador + " ganhou");
    }
  }

  verificarVencedor() {
    const combinacoes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ];

    for (let numCombinacao = 0; numCombinacao < combinacoes.length; numCombinacao++) {
      const [a, b, c] = combinacoes[numCombinacao];
      if (
        this.quadrados[a] &&
        this.quadrados[a] === this.quadrados[b] &&
        this.quadrados[a] === this.quadrados[c]
      ) {
        this.vencedor = true;
      }
    }
    if (!this.quadrados.includes(null) && !this.vencedor)
      this.empate = true;
  }
  iniciarJogo(): void {
    if (!this.inicio) {
      this.inicio = true;
      this.quadrados = Array(9).fill(null);
      this.jogador = 'X';
      this.vencedor = false;
      this.empate = false;
    }
  }

  trocarJogador() {
    this.jogador === 'X' ? this.jogador = 'O' : this.jogador = 'X';
  }
  resetarJogo() {
    if (this.inicio) {
      this.inicio=false;
      this.iniciarJogo();
    }
  }
}
