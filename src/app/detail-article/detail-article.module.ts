import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailArticlePageRoutingModule } from './detail-article-routing.module';
import { DetailArticlePage } from './detail-article.page';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailArticlePageRoutingModule,
    SwiperModule
  ],
  declarations: [DetailArticlePage]
})
export class DetailArticlePageModule {}
