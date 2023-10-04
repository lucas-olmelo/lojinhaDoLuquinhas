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
    console.log(this.wishList);
    
  }
  wishList: {id: number; nome: string; preco: number; img: string}[] = [];

  parsePrice(price: Number){
    return String(price);
  }
}
