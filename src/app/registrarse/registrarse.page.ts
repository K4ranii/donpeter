import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  asignaturas: any;
  registroForm: FormGroup;
  
  constructor(
    private builder: FormBuilder,
    private menuController: MenuController,
    private alertcontroller: AlertController,
    private router:Router

  ) {
    this.registroForm = this.builder.group({
      'nombre': new FormControl("", [Validators.required, Validators.minLength(4)]),
      'apellido': new FormControl("", [Validators.required, Validators.minLength(4)]),
      'correo': new FormControl("", [Validators.required, Validators.email]),
      'contrasena': new FormControl("", [Validators.required, Validators.minLength(8)]),
      'asignaturas': new FormControl("", [Validators.required, Validators.minLength(2)]),
    });
  }

  ngOnInit() {

  }

  MostrarMenu(){
    this.menuController.open('first');
  }
  
}