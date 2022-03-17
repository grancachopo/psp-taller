import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../servicios/login.service';
import { Login } from '../../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginSrv: LoginService
  ) {
    this.formularioLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [],
    });
  }

  ngOnInit(): void { }

  login(): void {

    let loginIn: Login = new Login(
      this.formularioLogin.controls['username'].value,
      this.formularioLogin.controls['password'].value,
      false
    );

    this.loginSrv.hacerLogin(loginIn).subscribe((login) => {
      console.log('Inicio sesion ' + JSON.stringify(login));
    });
  }
}
