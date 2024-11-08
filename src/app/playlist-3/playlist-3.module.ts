import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Playlist3PageRoutingModule } from './playlist-3-routing.module';

import { Playlist3Page } from './playlist-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Playlist3PageRoutingModule
  ],
  declarations: [Playlist3Page]
})
export class Playlist3PageModule {}
