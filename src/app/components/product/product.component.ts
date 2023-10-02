import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() name: string = '';
  @Input() image: string = '';
  @Input() price: string = '';

  returnPrice() {
    return parseFloat(this.price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  }

  clickHeart() {
    let div = document.querySelector('.priceAdd');

    let heart = document.querySelector('.bi.bi-heart');
    let heartFill = document.createElement('i');
    heartFill.classList.add('bi.bi-heart-fill');
    heartFill.setAttribute('style', 'font-size: 30px; color: black;');

    div?.appendChild(heartFill);
  }
}
