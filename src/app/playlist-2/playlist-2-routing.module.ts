import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Playlist2Page } from './playlist-2.page';

const routes: Routes = [
  {
    path: '',
    component: Playlist2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Playlist2PageRoutingModule {}
