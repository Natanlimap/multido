import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklistitem',
  templateUrl: './checklistitem.component.html',
})
export class ChecklistitemComponent implements OnInit {
  @Input() name= "teste";
  @Input() done= false;

  onClicked(){
    if(this.done){
      this.done = false;
      alert("falsoo")
      return;
    }
    this.done = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
