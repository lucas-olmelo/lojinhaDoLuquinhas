import { Component } from '@angular/core';
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  constructor(private cartService: CartService){ }

  select1: any = {};

  coverUrl: string = '../../../assets/images/covers/game_cover_';
  coverExtensao: string = '.jpg';

  gameCovers = [
    {
      id: 99,
      nome: 'Selecione o jogo que você quer comprar',
      preco: 0,
      img: ''
    },
    {
      id:0,
      nome:'Gan Ie',
      preco: 439.99,
      img: this.coverUrl + 0 + this.coverExtensao
    },
    {
      id:1,
      nome:'Eadniv Be Ciowie Eanf Rnanc',
      preco: 199.99,
      img: this.coverUrl + 1 + this.coverExtensao
    },
    {
      id:2,
      nome:'Gamee: Siamese',
      preco: 99.99,
      img: this.coverUrl + 2 + this.coverExtensao
    },
    {
      id:3,
      nome:'Faserck Faben Gamt Iae',
      preco: 299.99,
      img: this.coverUrl + 3 + this.coverExtensao
    },
    {
      id:4,
      nome:'Gamni EE',
      preco: 299.99,
      img: this.coverUrl + 4 + this.coverExtensao
    },
    {
      id:5,
      nome:'A7C4M Gan Oi Isiutlienm Gam IE',
      preco: 240,
      img: this.coverUrl + 5 + this.coverExtensao
    },
  ];

  game: { id: number; nome: string; preco: number; img: string;} = {
    id: 0,
    nome: '',
    preco: 0,
    img: ''
  };

  ngOnInit() {
    this.select1 = 99;
  }

  onChange(){
    this.game = this.gameCovers.filter((x)=> x.id == this.select1)[0];
  }
  
  clickButton(){
    alert(this.game.nome + ' adicionado ao carrinho')
    this.cartService.adicionaLista(this.gameCovers.filter((x)=> x.id == this.select1)[0]);
    this.game = {id: 0, nome: '', preco: 0, img: ''};
    this.select1 = 99;
  }
}
