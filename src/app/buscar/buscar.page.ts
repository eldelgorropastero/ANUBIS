import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  searchText: string = '';
  canciones: { nombre: string; url: string }[] = [
    { nombre: 'Eminem - Houdini', url: 'assets/music/HipHop/Houdini.mp3' },
    { nombre: 'Jony Beltran - F.U.ego', url: 'assets/music/HipHop/F.U.ego.mp3' },
    { nombre: 'AMON - Génesis', url: 'assets/music/HipHop/Genesis.mp3' },
    { nombre: 'Canserbero - Mañana Será Otro Día', url: 'assets/music/HipHop/Mañana Sera Otro Dia.mp3' },
    { nombre: 'Green A - Cubismo', url: 'assets/music/HipHop/Cubismo.mp3' },
    { nombre: 'Green A - Posesión demoníaca', url: 'assets/music/HipHop/Posesion demoniaca.mp3' },
    { nombre: 'Chystemc - PHIESTA', url: 'assets/music/HipHop/PHIESTA.mp3' },
    { nombre: 'MCDAVO - Desde Cero', url: 'assets/music/HipHop/Desde Cero.mp3' },
    { nombre: 'Afaz Natural - Alla En El Barrio', url: 'assets/music/HipHop/Alla En El Barrio.mp3' },
    { nombre: 'Duki - Malbec x Bizarrap', url: 'assets/music/Argentinos/Malbec.mp3' },
    { nombre: 'NATHY PELUSO - MANHATTAN', url: 'assets/music/Argentinos/MANHATTAN.mp3' },
    { nombre: 'Tiago PZK - RCP', url: 'assets/music/Argentinos/RCP.mp3' },
    { nombre: 'Paulo Londra - Adan y Eva', url: 'assets/music/Argentinos/Adan y Eva.mp3' },
    { nombre: 'Trueno - MAMICHULA', url: 'assets/music/Argentinos/MAMICHULA.mp3' },
    { nombre: 'Nicki Nicole - Colocao', url: 'assets/music/Argentinos/Colocao.mp3' },
    { nombre: 'LIT killah - La Tormenta', url: 'assets/music/Argentinos/La Tormenta.mp3' },
    { nombre: 'KHEA - Dónde Estás', url: 'assets/music/Argentinos/Donde Estas.mp3' },
    { nombre: 'MILO J - RINCÓN', url: 'assets/music/Argentinos/RINCON.mp3' },
    { nombre: 'Michael Jackson - Thriller', url: 'assets/music/Clasicos/Thriller.mp3' },
    { nombre: 'Michael Jackson - Billie Jean', url: 'assets/music/Clasicos/Billie Jean.mp3' },
    { nombre: 'Michael Jackson - Beat It', url: 'assets/music/Clasicos/Beat It.mp3' },
    { nombre: 'a-ha - Take On Me', url: 'assets/music/Clasicos/Take On Me.mp3' },
    { nombre: 'Rick Astley - Never Gonna Give You Up', url: 'assets/music/Clasicos/Never Gonna Give You Up.mp3' },
    { nombre: 'Queen - We Will Rock You', url: 'assets/music/Clasicos/We Will Rock You.mp3' },
    { nombre: 'Rick Astley - Together Forever', url: 'assets/music/Clasicos/Together Forever.mp3' },
    { nombre: 'Smash Mouth - All Star', url: 'assets/music/Clasicos/All Star.mp3' },
    { nombre: 'Boney M - Rasputin', url: 'assets/music/Clasicos/Rasputin.mp3' },
    // Agrega más canciones según sea necesario
  ];
  resultados: { nombre: string; url: string }[] = [];
  audio: HTMLAudioElement | null = null; // Variable para almacenar la instancia de Audio
  isPlaying: boolean = false; // Estado de reproducción

  constructor() {}

  ngOnInit() {}

  onSearch(event: any) {
    this.searchText = event.target.value; // Actualiza el texto de búsqueda
    this.filtrarCanciones();
  }

  filtrarCanciones() {
    this.resultados = this.canciones.filter(cancion =>
      cancion.nombre.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  reproducirCancion(url: string) {
    if (this.audio) {
      this.audio.pause(); // Pausa la canción actual si hay una reproduciéndose
    }
    this.audio = new Audio(url);
    this.audio.play().then(() => {
      this.isPlaying = true; // Actualiza el estado a reproduciendo
    }).catch(error => {
      console.error('Error al reproducir la canción:', error);
    });
  }

  togglePlay() {
    if (this.audio) {
      if (this.isPlaying) {
        this.audio.pause(); // Pausa si está reproduciendo
        this.isPlaying = false;
      } else {
        this.audio.play().then(() => {
          this.isPlaying = true; // Actualiza el estado a reproduciendo
        }).catch(error => {
          console.error('Error al reproducir la canción:', error);
        });
      }
    }
  }

  volverAReproducir() {
    if (this.audio) {
      this.audio.currentTime = 0; // Regresa al inicio
      this.audio.play().then(() => {
        this.isPlaying = true; // Actualiza el estado a reproduciendo
      }).catch(error => {
        console.error('Error al reproducir la canción:', error);
      });
    }
  }
}
