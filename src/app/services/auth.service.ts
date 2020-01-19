import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

 isLoggedIn;
 userDetail = {
   status: false,
   email: ''
 };

constructor(
  private http: HttpClient,
  private router: Router) {

  const loginData =  localStorage.getItem('loginData');
  if (loginData) {
      this.setIsLogin(JSON.parse(loginData));
    }

 }

getUserDetail(email, password) {
    // return this.http.post('https://reqres.in/api/login', {
    return this.http.post('http://local.com/mytests/index.php', {
      email,
      password
    });

  }
  saveLocalStorage(login) {
    localStorage.setItem('loginData', JSON.stringify(login));
  }
  setIsLogin(login) {
    console.log('login set', login);
    this.isLoggedIn = login.status;
    this.userDetail.status = login.status;
    this.userDetail.email = login.email;

  }
  logOut() {
    console.log('logout called');
    localStorage.removeItem('loginData');
    this.router.navigate(['']);
  }
  getLoginDetail() {

    return  this.userDetail;
  }
}

