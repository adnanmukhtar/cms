import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetail(email, password) {
    // return this.http.post('https://reqres.in/api/login', {
    return this.http.post('http://local.com/mytests/index.php', {
      email,
      password
    });

  }
}
