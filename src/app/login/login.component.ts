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
    this.Auth.getUserDetail(user, password).subscribe(data => {
      if(data.token){
        console.log(`Login data`, data.token);
      }else{
        console.log(`Login data`, data.error);
      }
    });

    return false;
  }

}
