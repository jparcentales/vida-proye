import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private loggedInUsername = new BehaviorSubject<string | null>(null); // Nuevo BehaviorSubject para el nombre de usuario
  private usersKey = 'registeredUsers';
  private loggedInUsernameKey = 'loggedInUserName'; // Clave para almacenar el nombre de usuario logueado

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const hasAuthToken = this.hasToken();
      this.loggedIn.next(hasAuthToken);
      if (hasAuthToken) {
        // Recuperar el nombre de usuario si ya está logueado
        const storedUsername = localStorage.getItem(this.loggedInUsernameKey);
        this.loggedInUsername.next(storedUsername);
      }
    }
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  get currentUsername(): Observable<string | null> { // Nuevo getter para el nombre de usuario
    return this.loggedInUsername.asObservable();
  }

  private hasToken(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('authToken');
    }
    return false;
  }

  private getUsers(): any[] {
    if (isPlatformBrowser(this.platformId)) {
      const users = localStorage.getItem(this.usersKey);
      return users ? JSON.parse(users) : [];
    }
    return [];
  }

  private saveUsers(users: any[]): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.usersKey, JSON.stringify(users));
    }
  }

  register(name: string, email: string, username: string, password: string): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const users = this.getUsers();
      if (users.some(user => user.username === username || user.email === email)) {
        return false; // El usuario o correo electrónico ya existe
      }
      users.push({ name, email, username, password });
      this.saveUsers(users);
      return true;
    }
    return false;
  }

  login(emailOrUsername: string, password: string): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const users = this.getUsers();
      const foundUser = users.find(user => (user.username === emailOrUsername || user.email === emailOrUsername) && user.password === password);

      if (foundUser) {
        localStorage.setItem('authToken', 'my-fake-jwt-token'); // Simula un token de autenticación
        const displayUsername = foundUser.name || foundUser.username; // Preferir el nombre, si no, el usuario
        localStorage.setItem(this.loggedInUsernameKey, displayUsername); // Almacenar el nombre de usuario
        this.loggedIn.next(true);
        this.loggedInUsername.next(displayUsername); // Actualizar el BehaviorSubject del nombre de usuario
        return true;
      }
    }
    return false;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('authToken');
      localStorage.removeItem(this.loggedInUsernameKey); // Eliminar el nombre de usuario almacenado
      this.loggedIn.next(false);
      this.loggedInUsername.next(null); // Limpiar el nombre de usuario
    }
  }
}