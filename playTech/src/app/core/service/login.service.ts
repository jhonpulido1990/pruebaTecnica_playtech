import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginUrl: string = 'https://apimocha.com/loginplaytech/';

  token: string | null = null;

  // BehaviorSubject para manter o estado autenticado
  private isAuthenticatedSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  // Observável para ser notificado quando o estado autenticado muda
  isAuthenticated$: Observable<boolean> =
    this.isAuthenticatedSubject.asObservable();

  private http = inject(HttpClient);

  constructor() {}

  login(credentials: string): Observable<any> {
    let headers = new HttpHeaders()
    headers = headers.append('Content-Type', 'application/json; charset=utf-8')
    return this.http.post('https://apimocha.com/loginplaytech', credentials, { headers })
  }
  // Método para verificar se o usuário está autenticado
  /* checkAuthenticated(): void {
    const token = localStorage.getItem('token');
    this.isAuthenticated$ = token !== null;
    this.isAuthenticatedSubject.next(this.isAuthenticated$);
  } */
  // Método para fazer logout
  logout(): void {
    // Remove o token do localStorage
    localStorage.removeItem('token');

    // Atualiza o BehaviorSubject para indicar que o usuário não está autenticado
    this.isAuthenticatedSubject.next(false);
  }
}
