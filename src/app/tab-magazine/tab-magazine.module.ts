import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabMagazinePageRoutingModule } from './tab-magazine-routing.module';

import { TabMagazinePage } from './tab-magazine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabMagazinePageRoutingModule
  ],
  declarations: [TabMagazinePage]
})
export class TabMagazinePageModule {}
