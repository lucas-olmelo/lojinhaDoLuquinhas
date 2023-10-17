import { Component } from '@angular/core';
import { profilePost, valores } from './Model/profile';
import { ServerService } from 'src/app/services/server.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private server: ServerService) {}

  client: profilePost = {} as profilePost;
  clientResult: profilePost = {} as profilePost;
  values: valores[] = []

  itemName: string = "";
  itemEmail: string = "";
  itemCpf: string = "";
  itemPassword: string = "";
  itemTel: string = "";

  callBack() {
    this.server.getUsers().subscribe(
      (resposta: any) => {
        console.log(resposta.data);
        this.values = resposta.data
      }
    )
  }

  profilePost() {
    this.client = {name: this.itemName, email: this.itemEmail, cpf: this.itemCpf, password: this.itemPassword, tel: this.itemTel};
    this.server.postUser(this.client).subscribe(
      (resposta: any) => {
        this.clientResult = (resposta)
        this.mostraDialogo(resposta);
      }
    )
    this.limpaForm();
  }

  limpaForm() {
    this.itemName = "";
    this.itemEmail = "";
    this.itemCpf = "";
    this.itemPassword = "";
    this.itemTel = "";
  }

  mostraDialogo(result = {} as profilePost) {

    // monta o css da mensagem para que fique flutuando na frente de todos elementos da página
    var cssMessage = "display: block; position: fixed; bottom: 5%; left: 20%; right: 20%; width: 60%; padding-top: 10px; z-index: 9999";
    var cssInner = "padding: 2%; font-size: 18px; margin: 0 auto; box-shadow: 1px 1px 5px black;";

    // monta o html da mensagem com Bootstrap
    var dialogo = "";
    dialogo += '<div id="message" style="'+cssMessage+'">';
    dialogo += '    <div class="alert alert-success alert-dismissable" style="'+cssInner+'">';
    dialogo += '    <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>';
    dialogo += `    O usuário ${result.name} foi cadastrado com o email ${result.email} (${result.id})`
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
    }, 6000); // milliseconds
  }
}
