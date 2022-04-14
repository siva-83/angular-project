import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  submit(email:string,password:string){
    let obj={email:email,password:password}
    // console.log({email:email,password:password})
    this.loginService.authenticate(obj)
  }

  ngOnInit(): void {
  }
  
}
