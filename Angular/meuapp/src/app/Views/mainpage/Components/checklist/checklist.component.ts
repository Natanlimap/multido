import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
})
export class ChecklistComponent implements OnInit {
   @Input() title: string;
   @Input() itens = ["1", "2", "3"];

   @Output() adicionarItemALista = new EventEmitter()

   
   nome=''

   nameChange(value){
     this.nome = value.target.value
     console.log(this.nome)
   }

  constructor() {
  }

  ngOnInit(): void {
  }

}
 