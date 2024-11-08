import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Playlist1Page } from './playlist-1.page';

const routes: Routes = [
  {
    path: '',
    component: Playlist1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Playlist1PageRoutingModule {}
