import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formgroup',
  templateUrl: './formgroup.component.html',
  styleUrls: ['./formgroup.component.css']
})
export class FormgroupComponent implements OnInit {

  registroDatosUsuario: FormGroup;

  constructor() {
    this.registroDatosUsuario = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'apellido': new FormControl('',  Validators.required),
      'email': new FormControl('',  [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ])

    });

  }
  save() {
    console.log( this.registroDatosUsuario.value);
  }

  ngOnInit() {
  }

}
