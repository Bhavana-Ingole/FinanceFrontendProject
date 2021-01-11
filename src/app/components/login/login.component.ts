import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log=new Login;

  constructor() { }

  ngOnInit() {
  }
  public login(){

  }
}
