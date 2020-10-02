import { Component, Input, OnInit } from '@angular/core';
import { Lista } from 'src/app/Class/lista';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
})
export class ChecklistComponent implements OnInit {
   @Input() title = "title";
   @Input() itens = [];

  constructor() { }

  ngOnInit(): void {
  }

}
 