import { Component } from '@angular/core';
import { CartService } from "../../services/cart.service";
import * as $ from 'jquery';

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
    this.mostraDialogo(this.game.nome);
    this.cartService.adicionaLista(this.gameCovers.filter((x)=> x.id == this.select1)[0]);
    this.game = {id: 0, nome: '', preco: 0, img: ''};
    this.select1 = 99;
  }

  mostraDialogo(gameName: string) {

    // monta o css da mensagem para que fique flutuando na frente de todos elementos da página
    var cssMessage = "display: block; position: fixed; bottom: 5%; left: 20%; right: 20%; width: 60%; padding-top: 10px; z-index: 9999";
    var cssInner = "padding: 2%; font-size: 18px; margin: 0 auto; box-shadow: 1px 1px 5px black;";

    // monta o html da mensagem com Bootstrap
    var dialogo = "";
    dialogo += '<div id="message" style="'+cssMessage+'">';
    dialogo += '    <div class="alert alert-success alert-dismissable" style="'+cssInner+'">';
    dialogo += '    <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>';
    dialogo += `    ${gameName} foi adicionado ao carrinho`
    dialogo += '    </div>';
    dialogo += '</div>';

    // adiciona ao body a mensagem com o efeito de fade
    $("body").append(dialogo);
    $("#message").hide();
    $("#message").fadeIn(200);

    // contador de tempo para a mensagem sumir
    setTimeout(function() {
      $('#message').fadeOut(300, function(){
          $(this).remove();
      });
    }, 3000); // milliseconds
  }
}
