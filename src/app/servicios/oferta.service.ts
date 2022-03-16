import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oferta } from '../model/oferta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Loginout } from '../model/loginout';

@Injectable({
  providedIn: 'root',
})
export class OfertaService {
  loginOut: Loginout | null = new Loginout('null');

  constructor(private http: HttpClient, private loginSrv: LoginService) {
    this.loginSrv.login.subscribe((out) => {
      this.loginOut = out;
    });
  }

  /**
   * Método que obtiene las ofertas
   * @return Array de {@link Oferta}
   */
  obtenerOfertas(): Observable<Array<Oferta>> {
    return this.http.get<Array<Oferta>>('http://localhost:8080/api/ofertas'); // FIXME: environment
  }

  guardadoFalso(): void {
    // Recuperar el objeto del formulario (igual login) [COMPONETE]

    let objeto: any = {
      titulo: 'Buckinghamshire',
      descripcion: 'forecast',
      empresa: 'Developer Hong Kong Dollar synthesize',
      salario: 58479,
      ciudad: 'Nepal Human array',
      email: 'Madge_Mayert@hotmail.com',
    };

    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${this.loginOut?.id_token}`,
    });

    this.http.post<any>('http://localhost:8080/api/ofertas', objeto, {
      headers: headers,
    });
  }
}
