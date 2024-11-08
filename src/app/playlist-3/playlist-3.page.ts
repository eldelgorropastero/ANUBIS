import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-playlist-3',
  templateUrl: './playlist-3.page.html',
  styleUrls: ['./playlist-3.page.scss'],
})
export class Playlist3Page implements OnInit {

  audio: HTMLAudioElement | undefined;

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
      case 3.1:
        songUrl = 'assets/music/Clasicos/Thriller.mp3'; // Michael Jackson - Thriller
        break;
      case 3.2:
        songUrl = 'assets/music/Clasicos/Billie Jean.mp3'; // Michael Jackson - Billie Jean
        break;
      case 3.3:
        songUrl = 'assets/music/Clasicos/Beat It.mp3'; // Michael Jackson - Beat It
        break;
      case 3.4:
        songUrl = 'assets/music/Clasicos/Take On Me.mp3'; // a-ha - Take On Me
        break;
      case 3.5:
        songUrl = 'assets/music/Clasicos/Never Gonna Give You Up.mp3'; // Rick Astley - Never Gonna Give You Up
        break;
      case 3.6:
        songUrl = 'assets/music/Clasicos/We Will Rock You.mp3'; // Queen - We Will Rock You
        break;
      case 3.7:
        songUrl = 'assets/music/Clasicos/Together Forever.mp3'; // Rick Astley - Together Forever
        break;
      case 3.8:
        songUrl = 'assets/music/Clasicos/All Star.mp3'; // Smash Mouth - All Star
        break;
      case 3.9:
        songUrl = 'assets/music/Clasicos/Rasputin.mp3'; // Boney M - Rasputin
        break;
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
