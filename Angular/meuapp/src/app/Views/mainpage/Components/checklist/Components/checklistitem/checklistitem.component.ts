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

  novoitem=''

  nameChange(value){
    this.novoitem = value.target.value
    console.log(this.novoitem)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
