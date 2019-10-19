import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Routes, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-affichtodo',
  templateUrl: './affichtodo.component.html',
  styleUrls: ['./affichtodo.component.css']
})
export class AffichtodoComponent implements OnInit {

  tab = [];
  faTrash = faTrash;
  faEdit = faEdit;




  //@Input() tablist: Todo[];

  constructor(private router: Router, public auth: AuthService) { }
  filterList = '';
  ngOnInit() {
    this.tab = JSON.parse(localStorage.getItem('todos'))

  }

  delete(item) {
    this.tab.splice(item, 1);
    localStorage.setItem('todos', JSON.stringify(this.tab))

  }

  modif(item, index) {
    this.router.navigate(['modif/' + index]);
    console.log(item)
    console.log(index)

  }



}
