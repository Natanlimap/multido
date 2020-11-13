import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Lista } from 'src/app/Class/lista';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
})
export class ChecklistComponent implements OnInit {
   @Input() title = "Titulo da lista";
   @Input() itens = ["item 1", "item 2", "item 3"];

   @Output() adicionarItemALista = new EventEmitter()

   
  constructor() {

  }

  ngOnInit(): void {
  }

}
 