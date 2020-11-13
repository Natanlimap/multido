import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/Class/lista';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
})
export class MainpageComponent {
  objetoLista = [
    new Lista("Titulo 1", ["item 1", "item 2", "Item 3"]),
    new Lista("Titulo 2", ["item 4", "item 5", "item 6"]),
  ];
  addItem(nomeDoItem){
    alert(nomeDoItem)
  }
 addAList(nomeDaLista){
   alert(nomeDaLista)
 }
  constructor() { }


}
