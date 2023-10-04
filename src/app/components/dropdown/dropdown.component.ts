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
  
  gameName: string = '';
  gamePrice: number = 0;
  gameId: number = 99;

  coverUrl: string = '../../../assets/images/covers/game_cover_';
  coverExtensao: string = '.jpg';

  gameCovers = [
    {
      id: 99,
      nome: 'Selecione o jogo que você quer comprar',
      preco: 0
    },
    {
      id:0,
      nome:'Gan Ie',
      preco: 439.99
    },
    {
      id:1,
      nome:'Eadniv Be Ciowie Eanf Rnanc',
      preco: 199.99
    },
    {
      id:2,
      nome:'Gamee: Siamese',
      preco: 99.99
    },
    {
      id:3,
      nome:'Faserck Faben Gamt Iae',
      preco: 299.99
    },
    {
      id:4,
      nome:'Gamni EE',
      preco: 299.99
    },
    {
      id:5,
      nome:'A7C4M Gan Oi Isiutlienm Gam IE',
      preco: 240
    },
  ];

  game: any;

  ngOnInit() {
    this.select1 = 99;
  }

  buscaInfo() {
    return [this.gameName, String(this.gamePrice), (this.coverUrl + this.gameId + this.coverExtensao)];
  }

  onChange(){
    this.gameName = this.gameCovers.filter((x)=> x.id == this.select1)[0].nome;
    this.gamePrice = this.gameCovers.filter((x)=> x.id == this.select1)[0].preco;
    this.gameId = this.gameCovers.filter((x)=> x.id == this.select1)[0].id;

    console.log(this.gamePrice);
    
  }
  
  clickButton(){
    alert(this.gameName + ' adicionado ao carrinho')
    this.cartService.adicionaLista(this.gameCovers.filter((x)=> x.id == this.select1)[0]);
    this.game = this.gameCovers.filter((x)=> x.id == this.select1)[0];
  }
}
