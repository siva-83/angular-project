import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { users } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private authenticated: boolean = false;
  private authStatusListener = new Subject<boolean>();

  getAuth(){
    return this.authenticated;
  }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) { }


  logout(){
    this.authenticated = false
    this.authStatusListener.next(this.authenticated);
    this.router.navigate(['login'])
  }

  authenticate(user : users){
    // 
    return this.http.post('http://localhost:4000/login', user)
    .subscribe((data: any) => {
      this.authenticated = data.auth;
      console.log("ready",data)
      this.authStatusListener.next(data.auth)
      if(data.auth){
        this.router.navigate([''])
      }
    })
  }


  findExistingUser(email : string){
    // 
    return this.http.get('http://localhost:5000/auth/existing/'+ email );
    
  }
}
