import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  userdata: any; 

  usuario= {
    id: 0,
    nombre: "",
    apellido: "",
    correo: "",
    contrasena: "",
    asignaturas: [],
    isActive: true,
    rol: ""
  };

  loginForm: FormGroup;

  constructor(
              private router: Router,
              private alertController: AlertController,
              private toastController: ToastController,
              private builder: FormBuilder,
              private menuController: MenuController,) {
    this.loginForm = this.builder.group({
      'correo': new FormControl("", [Validators.required, Validators.minLength(4)]),
      'password': new FormControl("", [Validators.required, Validators.minLength(4)])
    });
  }

  ngOnInit() {

  }

  MostrarMenu(){
    this.menuController.open('first');
  }
}