import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { TabService } from '../services/tab.service';
import { LoadingController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {

  imageBaseUrl = environment.imageUrl;
  webServiceUrl = environment.baseUrl;
  ArticleList:any;
  id: any;
  todos:any;
  currentPage = 1;
  
  constructor(
    private route: ActivatedRoute,
    private tabService: TabService,
    private loadingCtral: LoadingController,
    private navCtrl: NavController,
    private router: Router

    ) { }

  ngOnInit(){

    this.loadArticleList();
    
  }

  getListArticle(id:any) {

    this.tabService.getListContentByIDMenu(id).subscribe(res => {
      this.ArticleList = res;
      console.log(this.ArticleList);
    });
    
  }

  async loadArticleList(event?: InfiniteScrollCustomEvent){

    const id = this.route.snapshot.paramMap.get('id');
    const loading = await this.loadingCtral.create({
      message: 'Loading...', 
      spinner:'bubbles'
    });
    await loading.present();

    this.tabService.getListContentByIDMenu(id).subscribe(res => {
      loading.dismiss();
      this.ArticleList = res;
      console.log(res);
      event?.target.complete();

      if(event){
        event.target.disabled = res.length === this.currentPage;
      }

    });
  }

  loadMore(event?: InfiniteScrollCustomEvent){
    this.currentPage++;
    this.loadArticleList(event);
  }

  goBackPage(){
    this.navCtrl.navigateForward('tabs/tab-home');
  }

  goToDetailArticle(id_content:any){
    console.log('id content = '+id_content);
    this.router.navigate(['/tabs/tab-home', id_content]);

  }

}
