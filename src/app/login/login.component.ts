import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {

  }

  loginUser(value: any) {
    event.preventDefault();
    const userData = event.target;
    const user = value.user;
    const password = value.password;
    try {
    this.Auth.getUserDetail(user, password).subscribe((data: ResponseData) => {
      if (data.status) {
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
