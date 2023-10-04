import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent {
  @Input() game: {id: number, nome: string, preco: number, img: string} = {
    id: 0,
    nome: '',
    preco: 0,
    img: ''
  }

  ngOnInit() {
    console.log(this.game);
  }

  returnPrice() {
    return ((this.game.preco).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
  }
}
