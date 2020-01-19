import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private Auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    console.log('user is logged status', this.Auth.isLoggedIn);
    console.log('user is logged detail', this.Auth.getLoginDetail());
    if (!this.Auth.isLoggedIn) {
      this.router.navigate(['login']);
    }


  }

  logout() {
    this.Auth.logOut();
  }

}
