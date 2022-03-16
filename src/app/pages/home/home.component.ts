import { LoginService } from './../../servicios/login.service';
import { Oferta } from './../../model/oferta';
import { OfertaService } from './../../servicios/oferta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public hayUsuario: boolean;

  public ofertas: Array<Oferta> = [];

  constructor(
    private ofertaSrv: OfertaService,
    private loginSrv: LoginService
  ) {
    this.recuperarOfertas();
    this.hayUsuario = false;
    this.loginSrv.login.subscribe((loginRecibido) => {
      this.hayUsuario = loginRecibido !== null;
    });
  }

  ngOnInit(): void {
    this.recuperarOfertas();
  }

  recuperarOfertas(): void {
    this.ofertaSrv.obtenerOfertas().subscribe((respuesta) => {
      this.ofertas = respuesta;
      console.log('Ofertas recuperadas' + JSON.stringify(this.ofertas));
    });
  }
}
