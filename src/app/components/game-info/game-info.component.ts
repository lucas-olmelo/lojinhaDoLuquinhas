import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent {
  @Input() name: string = '';
  @Input() price: string = '';
  @Input() image: string = '';

  returnPrice() {
    return (parseFloat(this.price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
  }
}
