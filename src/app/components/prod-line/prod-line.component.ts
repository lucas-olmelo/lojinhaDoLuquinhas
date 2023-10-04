import { Component } from '@angular/core';

@Component({
  selector: 'app-prod-line',
  templateUrl: './prod-line.component.html',
  styleUrls: ['./prod-line.component.css']
})
export class ProdLineComponent {
  defaultImage: string = 'https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg';

  cover: string = '../../../assets/images/covers/game_cover_';
  extensao: string = '.jpg';

  games = [
    {
      id:0,
      nome:'Gan Ie',
      preco: 439.99,
      img: this.cover + 0 + this.extensao
    },
    {
      id:1,
      nome:'Eadniv Be Ciowie Eanf Rnanc',
      preco: 199.99,
      img: this.cover + 1 + this.extensao
    },
    {
      id:2,
      nome:'Gamee: Siamese',
      preco: 99.99,
      img: this.cover + 2 + this.extensao
    },
    {
      id:3,
      nome:'Faserck Faben Gamt Iae',
      preco: 299.99,
      img: this.cover + 3 + this.extensao
    },
    {
      id:4,
      nome:'Gamni EE',
      preco: 299.99,
      img: this.cover + 4 + this.extensao
    },
    {
      id:5,
      nome:'A7C4M Gan Oi Isiutlienm Gam IE',
      preco: 240,
      img: this.cover + 5 + this.extensao
    },
  ];

}
