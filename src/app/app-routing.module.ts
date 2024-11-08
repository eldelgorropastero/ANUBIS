import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./iniciar-sesion/iniciar-sesion.module').then(m => m.IniciarSesionPageModule)
  },
  {
    path: 'registrarme',
    loadChildren: () => import('./registrarme/registrarme.module').then(m => m.RegistrarmePageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then(m => m.NoticiasPageModule)
  },
  {
    path: 'biblioteca',
    loadChildren: () => import('./biblioteca/biblioteca.module').then(m => m.BibliotecaPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./buscar/buscar.module').then(m => m.BuscarPageModule)
  },
  {
    path: 'playlist-1',
    loadChildren: () => import('./playlist-1/playlist-1.module').then( m => m.Playlist1PageModule)
  },
  {
    path: 'playlist-2',
    loadChildren: () => import('./playlist-2/playlist-2.module').then( m => m.Playlist2PageModule)
  },
  {
    path: 'playlist-3',
    loadChildren: () => import('./playlist-3/playlist-3.module').then( m => m.Playlist3PageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
