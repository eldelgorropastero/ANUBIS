import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarme',
  templateUrl: './registrarme.page.html',
  styleUrls: ['./registrarme.page.scss'],
})
export class RegistrarmePage {
  username: string = '';          // Inicialización
  email: string = '';             // Inicialización
  confirmEmail: string = '';      // Inicialización
  password: string = '';          // Inicialización
  confirmPassword: string = '';   // Inicialización
  phoneNumber: string = '';       // Inicialización

  constructor(private router: Router) {}

  register() {
    // Aquí puedes manejar la lógica para el registro
    console.log('Registro en proceso...');
    // Redirigir a la página de noticias
    this.router.navigate(['/noticias']);
  }

  isPhoneNumberValid(): boolean {
    // Verifica que phoneNumber no sea vacío y que cumpla con los requisitos
    if (!this.phoneNumber) return false; // Retorna false si phoneNumber es vacío
    return (
      this.phoneNumber.startsWith('9') &&
      this.phoneNumber.length === 9 &&
      !isNaN(Number(this.phoneNumber))
    );
  }

  isUsernameValid(): boolean {
    return this.username.length >= 6 && this.username.length <= 12;
  }

  isEmailValid(): boolean {
    return this.email.includes('@') && this.email.endsWith('.com');
  }

  isConfirmEmailValid(): boolean {
    return this.confirmEmail === this.email;
  }

  isPasswordValid(): boolean {
    return this.password.length >= 6 && this.password.length <= 8;
  }

  isConfirmPasswordValid(): boolean {
    return this.confirmPassword === this.password;
  }

  isFormValid(): boolean {
    return (
      this.isUsernameValid() &&
      this.isEmailValid() &&
      this.isConfirmEmailValid() &&
      this.isPasswordValid() &&
      this.isConfirmPasswordValid() &&
      this.isPhoneNumberValid()
    );
  }
}
