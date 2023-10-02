import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartList: {id: number; nome: string; preco: number;}[] = [];

  adicionaLista(item: {id: number; nome: string; preco: number;}) {
    this.cartList.push(item);
  }

  retornaLista() {
    return this.cartList;
  }
}
