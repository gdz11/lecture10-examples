import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginFailed = false;

  form = new FormGroup(
    {
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    }
  );

  onLogin(){

    if(this.form.valid){
      this.loginFailed = false;
      this.authService.login(this.form.value.user!, this.form.value.password!).subscribe((success) => {
        if(success){
        //TODO implement yourself returning to original url after sign in (e.g. if user originally navigated to /students/search 
        //and was redirected to login page) because was not authorized, return user to /students/search after sign in is successfull
        //instead of navigating to default route (home)
          this.router.navigate(['/']);
        }
        else{
          this.loginFailed = true;
        }
      });
    }
  }

  constructor(private authService: AuthService, private router: Router){

  }

}
