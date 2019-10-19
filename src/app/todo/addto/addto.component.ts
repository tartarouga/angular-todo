import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Todo } from '../todo';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-addto',
  templateUrl: './addto.component.html',
  styleUrls: ['./addto.component.css']
})
export class AddtoComponent implements OnInit {

  public Editor = ClassicEditor;



  crudForm: FormGroup;
  tabcrud: Todo[] = [];
  submitted: boolean;
  user: any;

  router: any;



  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.connectedUser.usrename
    this.crudForm = new FormGroup({

      titre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      etat: new FormControl(),



    });
  }

  save() {
    console.log(this.crudForm.value)

    // this.tabcrud.push({

    //   titre: this.crudForm.value.titre,
    //   description: this.crudForm.value.description

    // });


    // this.submitted = true;
    // this.crudForm.reset();
    // console.log(this.tabcrud)
    // console.log(this.crudForm)

    this.tabcrud = JSON.parse(localStorage.getItem('todos'));
    if (this.tabcrud == null) {
      this.tabcrud = [];
    }

    this.tabcrud.push({

      titre: this.crudForm.value.titre,
      description: this.crudForm.value.description,
      etat: this.crudForm.value.etat,
      user: this.user



    });
    localStorage.setItem('todos', JSON.stringify(this.tabcrud))
    console.log(this.tabcrud)


  }

}
