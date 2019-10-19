import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Todo } from '../todo/todo';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {


  connexion: FormGroup;
  tabtodo = [];
  tabform = [];
  exist: boolean = false;
  user: any;
  

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {

    this.connexion = new FormGroup({

      username: new FormControl(),
      password: new FormControl()



    });

  }

  save() {


    this.tabform = JSON.parse(localStorage.getItem('users'));

    this.tabform.forEach(data => {
      console.log(data.usrename);
      if (data.usrename == this.connexion.value.username && data.password == this.connexion.value.password) {
        this.exist = true;
        this.user = data;
      }
    })

    if (!this.exist) {
      alert('verifier utilisateur ou mot de passe')
    } else {
      console.log(this.exist);
      localStorage.setItem('connectedUser', JSON.stringify(this.user))
      this.auth.connectedUser = this.user;
      this.router.navigate(['home'])
    }
    console.log(this.tabform);

  }
 
}


