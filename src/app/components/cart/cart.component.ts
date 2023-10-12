import { Component, Input } from '@angular/core';
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartService: CartService){
    this.cartList = cartService.retornaLista();
  }
  cartList: any[] = [];

  coverUrl: string = '../../../assets/images/covers/game_cover_';
  coverExtensao: string = '.jpg';

  adicionaValores(){
    let custo = 0;

    this.cartList.forEach(item => {
      custo += item.preco;
    });

    return custo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  }

  removeItem(id: number) {
    let game = this.cartService.retornaLista().filter((game)=> game.id == id)[0]
    this.cartService.removeLista(game);
    this.cartList = this.cartService.retornaLista();
  }

  clearCart(){
    this.cartService.limpaCarrinho();
    this.cartList = this.cartService.retornaLista();
  }
}
