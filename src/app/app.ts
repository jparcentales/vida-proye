import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { AuthService } from './services/auth.service'; // Importar AuthService
import { Observable } from 'rxjs'; // Importar Observable

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule], // Añadir CommonModule aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Agre-vida');
  isLoggedIn$: Observable<boolean>;
  currentUsername$: Observable<string | null>;
  isMenuOpen: boolean = false; // Nueva propiedad para controlar el estado del menú

  constructor(private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.currentUsername$ = this.authService.currentUsername;
  }

  logout(): void {
    this.authService.logout();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Método para alternar el estado del menú
  }
}
