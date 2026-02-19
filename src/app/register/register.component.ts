import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  email = '';
  username = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  // successMessage = ''; // Eliminamos esta propiedad ya que el mensaje se mostrará en el login

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {
    this.errorMessage = '';
    // this.successMessage = ''; // Eliminamos esta línea

    if (!this.name || !this.email || !this.username || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Todos los campos son obligatorios.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    if (this.username.length < 3) {
      this.errorMessage = 'El usuario debe tener al menos 3 caracteres.';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'La contraseña debe tener al menos 6 caracteres.';
      return;
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.errorMessage = 'Por favor, introduce un correo electrónico válido.';
      return;
    }

    if (this.authService.register(this.name, this.email, this.username, this.password)) {
      // Redirigir al login con un queryParam para mostrar el mensaje de éxito
      this.router.navigate(['/login'], { queryParams: { registered: 'true' } });
    } else {
      this.errorMessage = 'El nombre de usuario o correo electrónico ya existe. Por favor, elige otro.';
    }
  }
}