import { Component } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage {
  constructor() { }

  // Método para manejar la edición de datos
  editData() {
    // Aquí puedes agregar la lógica para editar los datos
    console.log('Edit Data clicked');
    // Podrías redirigir a otra página o abrir un formulario de edición
  }
}
