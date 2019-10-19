import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;
  tab = [];
  usernameExist = false;

  constructor() { }

  ngOnInit() {

    this.registerForm = new FormGroup({

      username: new FormControl(),
      nom: new FormControl(),
      prenom: new FormControl(),
      password: new FormControl(),
      confpassword: new FormControl()



    });

  }

  save() {

    this.tab = JSON.parse(localStorage.getItem('users'));
    if (this.tab == null) {
      this.tab = [];
    }
    this.tab.push({

      usrename: this.registerForm.value.username,
      nom: this.registerForm.value.nom,
      prenom: this.registerForm.value.prenom,
      password: this.registerForm.value.password

    });

    localStorage.setItem('users', JSON.stringify(this.tab))
    console.log(this.tab)
    console.log(this.registerForm.value)

  }

  verif(variable) {

    let table = JSON.parse(localStorage.getItem('users'));


    for (const user of table) {

      if (user.usrename === variable) {
        this.usernameExist = true;

      } else {
        this.usernameExist = false;
      }

    }
  }

}
