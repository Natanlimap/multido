import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklistitem',
  templateUrl: './checklistitem.component.html',
})
export class ChecklistitemComponent implements OnInit {
  @Input() name= "teste";
  @Input() done= false;

  constructor() { }

  ngOnInit(): void {
  }

}
