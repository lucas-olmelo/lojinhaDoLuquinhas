import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-desejos',
  templateUrl: './lista-desejos.component.html',
  styleUrls: ['./lista-desejos.component.css']
})
export class ListaDesejosComponent {
  input: any = {};
  listaDesejos: string[] = [];

  adicionaNaLista() {
    this.listaDesejos.push(this.input)
  }
}
