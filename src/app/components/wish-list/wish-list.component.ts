import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})

export class WishListComponent {

  constructor(private cartService: CartService){
    this.wishList = cartService.retornaListaDesejo();
  }
  wishList: {id: number; nome: string; preco: number; img: string}[] = [];

  parsePrice(price: Number){
    return String(price);
  }

  clickButton(id: number){
    let game = this.cartService.retornaListaDesejo().filter((game)=> game.id == id)[0]

    this.mostraDialogo(game.nome)
    this.cartService.adicionaLista(game);
  }

  removeItem(id: number) {
    let game = this.cartService.retornaListaDesejo().filter((game)=> game.id == id)[0]
    this.cartService.removeListaDesejo(game);
    this.wishList = this.cartService.retornaListaDesejo();
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
