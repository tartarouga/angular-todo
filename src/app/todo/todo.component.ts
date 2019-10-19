import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Todo } from './todo';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { AuthService } from '../auth.service';





@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  closeResult: string;
  faTrash = faTrash;
  faEdit = faEdit;
  crudForm: FormGroup;
  updateForm: FormGroup;
  tabcrud: Todo[] = [];
  submitted = false;

  saveIndex: number;
  constructor(public dialog: MatDialog, public auth: AuthService) { }

  ngOnInit() {

    this.crudForm = new FormGroup({

      titre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      etat: new FormControl()

    });

    this.updateForm = new FormGroup({
      titre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      etat: new FormControl()
    });





  }

  save() {
    console.log(this.crudForm.value)

    this.tabcrud.push({

      titre: this.crudForm.value.titre,
      description: this.crudForm.value.description,
      etat: this.crudForm.value.etat,
      user: this.auth.connectedUser.user

    });


    this.submitted = true;
    this.crudForm.reset();
    console.log(this.tabcrud)
    console.log(this.crudForm)

  }

  delete(item) {
    this.tabcrud.splice(item, 1);

  }

  modif(todo, i) {
    console.log(todo)
    console.log(i)
    this.saveIndex = i;

    this.updateForm.setValue({ titre: todo.titre, description: todo.description, etat: todo.etat });







  }

  update() {

    console.log(this.updateForm.value.titre)
    this.tabcrud[this.saveIndex].titre = this.updateForm.value.titre
    this.tabcrud[this.saveIndex].description = this.updateForm.value.description
    this.tabcrud[this.saveIndex].etat = this.updateForm.value.etat



  }







}

