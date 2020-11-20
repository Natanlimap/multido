import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }
  email = ''
  senha = ''
  emailChange(value){
    this.email = value.target.value
    console.log(this.email)
  }
  senhaChange(value){
    this.senha = value.target.value
    console.log(this.senha)
  }
  ngOnInit(): void {
  } 

}
