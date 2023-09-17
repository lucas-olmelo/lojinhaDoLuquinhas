import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-desejos',
  templateUrl: './lista-desejos.component.html',
  styleUrls: ['./lista-desejos.component.css']
})
export class ListaDesejosComponent {
  item: any = {};
  listaDesejos: string[] = [];

  adicionaNaLista(nome: string) {
    this.listaDesejos.push(nome);
  }
}
