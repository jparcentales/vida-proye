import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComoJugarComponent } from './como-jugar/como-jugar.component';
import { CreacionComponent } from './creacion/creacion.component';
import { ReglasComponent } from './reglas/reglas.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; // Importar RegisterComponent

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'como-jugar',
    component: ComoJugarComponent,
  },
  {
    path: 'creacion',
    component: CreacionComponent,
  },
  {
    path: 'reglas',
    component: ReglasComponent,
  },
  {
    path: 'preguntas',
    component: PreguntasComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register', // Nueva ruta para el registro
    component: RegisterComponent,
  },
  // Cualquier otra ruta que no coincida, redirige a la página de inicio
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
