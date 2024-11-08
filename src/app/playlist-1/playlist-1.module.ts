import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Playlist1PageRoutingModule } from './playlist-1-routing.module';

import { Playlist1Page } from './playlist-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Playlist1PageRoutingModule
  ],
  declarations: [Playlist1Page]
})
export class Playlist1PageModule {}
