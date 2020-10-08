import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionarlista',
  templateUrl: './adicionarlista.component.html',
})
export class AdicionarlistaComponent implements OnInit {


  teste(){
    alert("entrei")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
