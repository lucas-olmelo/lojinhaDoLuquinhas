import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  select1: any = {};
  pais: any=[]; 


  gameCovers = [
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
  constructor(){}

  ngOnInit() {
    
  }

  onChange(){

  }

  clickButton(){
    
  }
}
