import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})

export class WishListComponent {

  constructor(private cartService: CartService){
    this.wishList = cartService.retornaListaDesejo();
  }
  wishList: {id: number; nome: string; preco: number; img: string}[] = [];

  parsePrice(price: Number){
    return String(price);
  }

  clickButton(id: number){
    let game = this.cartService.retornaListaDesejo().filter((game)=> game.id == id)[0]

    alert(game.nome + ' adicionado ao carrinho')
    this.cartService.adicionaLista(game);
  }

  removeItem(id: number) {
    let game = this.cartService.retornaListaDesejo().filter((game)=> game.id == id)[0]
    this.cartService.removeListaDesejo(game);
    this.wishList = this.cartService.retornaListaDesejo();
  }
}
