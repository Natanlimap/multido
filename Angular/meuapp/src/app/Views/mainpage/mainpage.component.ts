import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
})
export class MainpageComponent {
  
  objetoLista: Array<{title: string, lista: Array<string>}> = [
    {
      title: "teste",
      lista: ["1", "2", "3"]
    },
    {
      title: "teste2",
      lista: ["1", "2", "3"]
    },

  ];
  addItem(object){
    this.objetoLista[object.index].lista.push(object.nome)
    console.log(this.objetoLista)
    console.log(object)
  }

 addAList(nomeDaLista){
   console.log(this.objetoLista)
 }
  constructor() { }


}
