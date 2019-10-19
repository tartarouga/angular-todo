import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isauth;
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {


  }

  logout() {
    localStorage.setItem('connectedUser', null);
    this.auth.connectedUser = null;
    this.router.navigateByUrl('/connexion');
  }



}
