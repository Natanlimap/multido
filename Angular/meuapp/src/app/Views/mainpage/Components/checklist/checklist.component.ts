import { Component, Input, OnInit } from '@angular/core';
import { Lista } from 'src/app/Class/lista';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
})
export class ChecklistComponent implements OnInit {
   @Input() title = "Titulo da lista";
   @Input() itens = ["item 1", "item 2", "item 3"];
   @Input() addItem;

   checked(){

    this.addItem();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
 