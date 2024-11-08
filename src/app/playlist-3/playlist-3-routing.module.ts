import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Playlist3Page } from './playlist-3.page';

const routes: Routes = [
  {
    path: '',
    component: Playlist3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Playlist3PageRoutingModule {}
