import { Loginout } from './../model/loginout';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Login } from './../model/login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private loginBehaviourSubject: BehaviorSubject<Loginout | null>;
  public login: Observable<Loginout | null>;

  constructor(private http: HttpClient) {
    this.loginBehaviourSubject = new BehaviorSubject<Loginout | null>(JSON.parse(<string>localStorage?.getItem('login')));

    this.login = this.loginBehaviourSubject.asObservable();

  }

  hacerLogin(loginIn: Login): Observable<Loginout> {

    return this
      .http
      .post<Loginout>('http://localhost:8080/api/authenticate', loginIn)
      .pipe(map(respuestaBack => {

        this.loginBehaviourSubject.next(respuestaBack);

        let value = JSON.stringify(respuestaBack);
        localStorage.setItem('login', value);
        console.log('Se guardo el token' + value);
        return respuestaBack;
      }));
  }

  verUsuarioConectado(): Loginout | null {
    return this.loginBehaviourSubject?.value;
  }

  logout(): void {
    localStorage.removeItem('login');
    this.loginBehaviourSubject.next(null);

  }
}
