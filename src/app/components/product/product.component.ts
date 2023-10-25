import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private cartService: CartService) {}

  wishList: {id: number, nome: string, preco: number, img: string}[] = [];

  @Input() game: {id: number, nome: string, preco: number, img: string} = {
    id: 0,
    nome: '',
    preco: 0,
    img: ''
  };

  returnPrice() {
    return (this.game.preco).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  }

  clickHeart(id: number) {
    let heart = document.querySelector(`.btnHeart${id}`);
    let heartFill = document.querySelector(`.btnHeartFill${id}`);

    if (heartFill?.classList.contains('noDisplay')) {
      if (this.cartService.retornaLista().includes(this.game)) {
        return;
      } else {
        heart?.classList.add('noDisplay');
        heartFill?.classList.remove('noDisplay');
        this.cartService.adicionaListaDesejo(this.game);
      }
    } else {
      heartFill?.classList.add('noDisplay');
      heart?.classList.remove('noDisplay');
      this.cartService.removeListaDesejo(this.game);
    }
  }
}
