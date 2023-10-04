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

  wishList: {id: number; nome: string; preco: number; img: string}[] = [];

  adicionaListaDesejo(item: {id: number; nome: string; preco: number; img: string}) {
    this.wishList.push(item);
  }

  removeListaDesejo(item: {id: number; nome: string; preco: number; img: string}) {
    let index = this.wishList.indexOf(item);
    this.wishList.splice(index, 1);
  }

  retornaListaDesejo() {
    return this.wishList;
  }
}
