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
}
