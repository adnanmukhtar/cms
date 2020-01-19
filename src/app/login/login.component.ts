import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    if (this.Auth.isLoggedIn) {
      this.router.navigate(['admin']);
    }

  }

  loginUser(value: any) {
    event.preventDefault();
    const userData = event.target;
    const user = value.user;
    const password = value.password;
    try {
    this.Auth.getUserDetail(user, password).subscribe((data: ResponseData) => {
      if (data.status) {
        this.Auth.setIsLogin(data);
        this.Auth.saveLocalStorage(data);
        this.router.navigate(['admin']);
        console.log(`Login data`, data.msg);
      } else {
        console.log(`Login data`, data.msg);
      }
    }, error => {
      console.log(`Login data`, error.error);
    }
    );
  } catch (error) {
    console.log('===', error.error);
  }

    return false;
  }

}

export interface ResponseData {
  status: boolean;
  msg: string;
}
