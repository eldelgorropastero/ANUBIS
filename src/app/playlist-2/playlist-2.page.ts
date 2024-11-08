import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-playlist-2',
  templateUrl: './playlist-2.page.html',
  styleUrls: ['./playlist-2.page.scss'],
})
export class Playlist2Page implements OnInit {

  audio: HTMLAudioElement | null = null;  // Inicializado como null

  constructor(private navCtrl: NavController) { }

  ngOnInit() { }

  playSong(songId: number) {
    // Detener cualquier canción que esté sonando
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }

    // Rutas a las canciones almacenadas en assets
    let songUrl = '';
    switch (songId) {
      case 2.1:
        songUrl = 'assets/music/Argentinos/Malbec.mp3';  // Duki - Malbec x Bizarrap
        break;
      case 2.2:
        songUrl = 'assets/music/Argentinos/MANHATTAN.mp3';  // NATHY PELUSO - MANHATTAN
        break;
      case 2.3:
        songUrl = 'assets/music/Argentinos/RCP.mp3';  // Tiago PZK - RCP
        break;
      case 2.4:
        songUrl = 'assets/music/Argentinos/Adan y Eva.mp3';  // Paulo Londra - Adán y Eva
        break;
      case 2.5:
        songUrl = 'assets/music/Argentinos/MAMICHULA.mp3';  // Trueno - Mamichula
        break;
      case 2.6:
        songUrl = 'assets/music/Argentinos/Colocao.mp3';  // Nicki Nicole - Colocao
        break;
      case 2.7:
        songUrl = 'assets/music/Argentinos/La Tormenta.mp3';  // LIT killah - La Tormenta
        break;
      case 2.8:
        songUrl = 'assets/music/Argentinos/Donde Estas.mp3';  // KHEA - Dónde Estás
        break;
      case 2.9:
        songUrl = 'assets/music/Argentinos/RINCON.mp3';  // MILO J - RINCÓN
        break;
      // Añadir más canciones según sea necesario
    }

    // Reproducir la canción seleccionada
    if (songUrl) {
      this.audio = new Audio(songUrl);
      this.audio.play();
      console.log(`Reproduciendo la canción con ID: ${songId}, URL: ${songUrl}`);
    } else {
      console.log('No se encontró una URL para la canción seleccionada.');
    }
  }

  playAll() {
    console.log('Reproduciendo todas las canciones');
    // Aquí puedes implementar la funcionalidad para reproducir todas las canciones en secuencia
  }
}
