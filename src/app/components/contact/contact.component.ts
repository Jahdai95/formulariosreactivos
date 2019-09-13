import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../../services/data-db.service';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor( private _serviceDB: DataDbService) {
    // instancia del formulario
    this.contactForm = this.crearFormGroup();
  }

  ngOnInit() {
  }

  crearFormGroup() {
    return new FormGroup({
      nombre: new FormControl(''),
      email: new FormControl(''),
      mensaje: new FormControl('')

    });
  }
  resetForm() {
    this.contactForm.reset();
  }
  save() {
    console.log('guardar', this.contactForm.value);
    // const newContact = {
    //   nombre: 'Jade',
    //   email: 'jahdaireyesortega@gmail.com',
    //   mensaje: 'Holap'
    // };

    this._serviceDB.saveMessage(this.contactForm.value);
    this.resetForm();
  }

}
