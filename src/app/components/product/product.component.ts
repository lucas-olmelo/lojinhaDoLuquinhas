import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.checkItem()
  }

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

  checkItem() {

    // var icon = '';
    // if (!this.cartService.retornaLista().includes(this.game)) {
    //   console.log('oi');
      
    //   icon += '<span class="btnHeart'+this.game.id+'">'
    //   icon += '<i (click)="clickHeart' +this.game.id +'" class="bi bi-heart" style="font-size: 30px; color: black;"></i>'
    //   icon += '</span>';
    // } else {
    //   console.log('txhau');

    //   icon += '<span class="btnHeartFill{{game.id}}">'
    //   icon += '<i (click)="clickHeart(game.id)" class="bi bi-heart-fill" style="font-size: 30px; color: black;"></i>'
    //   icon += '</span>';
    // }

    // let id = this.game.id

    // let queryString = `btnHeart${id}`;
    
    // var test = document.querySelectorAll('#btnHeart');
    // test[this.game.id].appendChild(icon)
    // console.log(test);
    
    // $('#btnHeart'+id).append(icon);

  }
}
