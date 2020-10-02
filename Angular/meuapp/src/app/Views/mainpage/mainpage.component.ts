import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/Class/lista';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
})
export class MainpageComponent {
  objetoLista = [
    new Lista("Teste", [1, 2, 3]),
    new Lista("Teste2", [1, 2, 3]),

  ];
  constructor() { }



}
