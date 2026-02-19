import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common'; // Importar CommonModule para *ngIf

@Component({
  selector: 'app-login',
  standalone: true, // Marcar como standalone
  imports: [FormsModule, CommonModule], // Importar FormsModule y CommonModule aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = '';
  successMessage: string | null = null; // Nueva propiedad para el mensaje de éxito

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute // Inyectar ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Suscribirse a los queryParams para verificar si viene de un registro exitoso
    this.route.queryParams.subscribe(params => {
      if (params['registered'] === 'true') {
        this.successMessage = '¡Registro exitoso! Ya puedes iniciar sesión.';
      }
    });
  }

  login(): void {
    this.errorMessage = ''; // Limpiar mensajes de error anteriores
    this.successMessage = null; // Limpiar mensajes de éxito anteriores

    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/']); // Redirige a la página de inicio después del login exitoso
    } else {
      this.errorMessage = 'Credenciales inválidas. Inténtalo de nuevo.';
    }
  }
}