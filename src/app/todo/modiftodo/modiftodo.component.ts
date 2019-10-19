import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modiftodo',
  templateUrl: './modiftodo.component.html',
  styleUrls: ['./modiftodo.component.css']
})
export class ModiftodoComponent implements OnInit {

  updateForm: FormGroup;
  id: any;
  tab = [];


  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['index'];
    this.tab = JSON.parse(localStorage.getItem('todos'))
    console.log(this.id)

    this.updateForm = new FormGroup({

      titre: new FormControl(this.tab[this.id].titre, [Validators.required, Validators.minLength(5)]),
      description: new FormControl(this.tab[this.id].description, [Validators.required, Validators.maxLength(20)])

    });
  }

  save() {


    this.tab.splice(this.id, 1, { titre: this.updateForm.value.titre, description: this.updateForm.value.description })

    // this.tab.push({

    //   titre: this.updateForm.value.titre,
    //   description: this.updateForm.value.description

    // });
    localStorage.setItem('todos', JSON.stringify(this.tab))
  }

  retour() {

    this.router.navigate(['/affiche']);
  }

}
