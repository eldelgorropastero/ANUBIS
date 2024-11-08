import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Playlist2PageRoutingModule } from './playlist-2-routing.module';

import { Playlist2Page } from './playlist-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Playlist2PageRoutingModule
  ],
  declarations: [Playlist2Page]
})
export class Playlist2PageModule {}
