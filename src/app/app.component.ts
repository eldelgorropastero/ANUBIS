import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private menuCtrl: MenuController) {}

  shouldShowMenu(): boolean {
    const currentRoute = this.router.url;
    return (
      currentRoute === '/noticias' ||
      currentRoute === '/biblioteca' ||
      currentRoute === '/buscar'
    );
  }

  navigateTo(page: string) {
    this.menuCtrl.close(); // Cierra el menú
    this.router.navigate([`/${page}`]); // Navega a la página deseada
  }
}
