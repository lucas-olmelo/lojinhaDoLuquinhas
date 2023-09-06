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
}
