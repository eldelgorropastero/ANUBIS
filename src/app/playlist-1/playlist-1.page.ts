import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-1',
  templateUrl: './playlist-1.page.html',
  styleUrls: ['./playlist-1.page.scss'],
})
export class Playlist1Page implements OnInit {

  audio: HTMLAudioElement | undefined;

  constructor() { }

  ngOnInit() { }

  playSong(songId: number) {
    // Detener cualquier canción que esté sonando
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }

    // Rutas a las canciones almacenadas en assets/music/HipHop
    let songUrl = '';
    switch (songId) {
      case 1.1:
        songUrl = 'assets/music/HipHop/Houdini.mp3'; // Eminem - Houdini
        break;
      case 1.2:
        songUrl = 'assets/music/HipHop/F.U.ego.mp3'; // Jony Beltran - F.U.ego
        break;
      case 1.3:
        songUrl = 'assets/music/HipHop/Genesis.mp3'; // AMON - Génesis
        break;
      case 1.4:
        songUrl = 'assets/music/HipHop/Mañana Sera Otro Dia.mp3'; // Canserbero - Mañana Será Otro Día
        break;
      case 1.5:
        songUrl = 'assets/music/HipHop/Cubismo.mp3'; // Green A - Cubismo
        break;
      case 1.6:
        songUrl = 'assets/music/HipHop/Posesion demoniaca.mp3'; // Green A - Posesión Demoníaca
        break;
      case 1.7:
        songUrl = 'assets/music/HipHop/PHIESTA.mp3'; // Chystemc - PHIESTA
        break;
      case 1.8:
        songUrl = 'assets/music/HipHop/Desde Cero.mp3'; // MCDAVO - Desde Cero
        break;
      case 1.9:
        songUrl = 'assets/music/HipHop/Alla En El Barrio.mp3'; // Afaz Natural - Alla En El Barrio
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
