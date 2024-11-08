import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToPlaylist1() {
    this.router.navigate(['/playlist-1']);
  }

  navigateToPlaylist2() {
    this.router.navigate(['/playlist-2']); // Asegúrate de tener la ruta definida
  }

  navigateToPlaylist3() {
    this.router.navigate(['/playlist-3']); // Asegúrate de tener la ruta definida
  }

  addNewPlaylist() {
    // Aquí puedes manejar la lógica para agregar una nueva playlist.
    console.log("Agregar nueva playlist");
    // Por ejemplo, redirigir a una página para crear una nueva playlist:
    // this.router.navigate(['/add-playlist']);
  }
}
