import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-adicionarlista',
  templateUrl: './adicionarlista.component.html',
})

export class AdicionarlistaComponent implements OnInit {

  @Output() criarLista = new EventEmitter()

  name = ''


  nameChange(value){
    this.name = value.target.value
    console.log(this.name)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
