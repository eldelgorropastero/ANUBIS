import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage {
  
  constructor(private router: Router) {}

  // Método para redirigir al usuario a la página principal o donde desees
  login() {
    // Aquí puedes implementar la lógica de inicio de sesión
    // Luego redirige a la página de inicio
    this.router.navigate(['/home']);
  }
}
