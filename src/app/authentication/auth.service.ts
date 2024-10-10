import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUserUrl = 'http://localhost:8080/user';
  private tokenSubject: BehaviorSubject<string | null>;
  public token: Observable<string | null>;

  constructor(private http: HttpClient, private router: Router) {
    this.tokenSubject = new BehaviorSubject<string | null>(localStorage.getItem('token'));
    this.token = this.tokenSubject.asObservable();
  }


  // VÉRIFICATION AUTHENTIFICATION //

  public get tokenValue(): string | null {
    return this.tokenSubject.value;
  }

  isTokenExpired(token: string): boolean {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  isAuthenticated(): boolean {
    const token = this.tokenValue;
    return !!token && !this.isTokenExpired(token); // Vérifie si le token est présent et valide
  }

  //////////////////////



  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUserUrl + "/connexion", { email: email, password: password }).pipe(
      map(response => {
        if (response && response.bearer) {
          localStorage.setItem('token', response.bearer); // Enregistrer le token dans localStorage
          this.tokenSubject.next(response.bearer); // Mettre à jour le BehaviorSubject
          this.router.navigate(['/pokemon']); // Rediriger vers une page protégée après la connexion
        }
        return response;
      })
    );
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUserUrl + "/inscription", user).pipe(
      map(response => {
        if (response) {
          return response;
        }
        return response;
      })
    );
  }

  sendCode(code: string) {
    return this.http.post<string>(this.apiUserUrl + "/activation", code).pipe(
      map(response => {
        if (response) {
          console.log('Compte activé');
        }
        return response;
      })
    );
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUserUrl}/${id}`);
  }
}
