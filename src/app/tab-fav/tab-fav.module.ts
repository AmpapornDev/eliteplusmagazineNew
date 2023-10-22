import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabFavPageRoutingModule } from './tab-fav-routing.module';

import { TabFavPage } from './tab-fav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabFavPageRoutingModule
  ],
  declarations: [TabFavPage]
})
export class TabFavPageModule {}
