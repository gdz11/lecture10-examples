import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  isSignedIn(){
    return this.isAuthenticated;
  }

  //this is fake auth. we wil see actual auth during next lecture (using jwt token and api auth endpoint)
  login(user: string, password: string){
    if(user == 'admin' && password == 'admin')
    {
      this.isAuthenticated = true;
    }

    return of(this.isAuthenticated);
  }

  logout(){
    this.isAuthenticated = false;

    return of(true);//successfully logged out
  }

  constructor() { }
}
