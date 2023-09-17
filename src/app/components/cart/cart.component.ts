import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() cartList: any[] = [];
  coverUrl: string = '../../../assets/images/covers/game_cover_';
  coverExtensao: string = '.jpg';

  
  adicionaValores(){
    let custo = 0;

    this.cartList.forEach(item => {
      custo += item.preco;
    });

    return custo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  }
}
