import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TabService } from '../services/tab.service';
import { LoadingController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabHomePage implements OnInit {

  type: string = 'all';
  currentPage = 1;
  var_id:any;

  dataSlideContent: any=[];
  dataCategory: any=[];
  dataContentCategory:any=[];
  dataPhotoEssay:any=[];
  listContent:any=[];

  imageBaseUrl = environment.imageUrl;
  webServiceUrl = environment.baseUrl;

  constructor(
    private http:HttpClient,
    private tabService: TabService,
    private loadingCtral: LoadingController,
    public router:Router
    ) { 
    this.type = "Home";
  }

  ngOnInit(): void {
    this.slideContent();  
    this.listNewContent(); 
    this.listPhotoEssay();
    
  }

  segmentChanged(): void {

    if (this.type === '2') {
      this.loadContent();
    }else if(this.type === '9') {
      this.loadContent();
    }else if(this.type === '3') {
      this.loadContent();
    }else if(this.type === '5') {
      this.loadContent();
    }else if(this.type === '6') {
      this.loadContent();
    }else if(this.type === '8') {
      this.loadContent();
    }
  }

  slideContent(){
    this.http.get(this.webServiceUrl+'/ws_slide_content.php').subscribe(res => {
      this.dataSlideContent = res;
    });
  }

  listNewContent(){
    this.http.get(this.webServiceUrl+'/ws_category_content_limit.php?var_id=10').subscribe(res=>{
      this.dataContentCategory = res;
    });
  }

  listPhotoEssay(){
    this.http.get(this.webServiceUrl+'/ws_photoessay.php?page=1').subscribe(res=>{
      this.dataPhotoEssay = res;
    });
  }

  async loadContent(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtral.create({
      message: 'Loading...', 
      spinner:'bubbles'
    });
    await loading.present();

    this.tabService.getListContentByIDMenu(this.type).subscribe(dataContent => {
      loading.dismiss();
      this.listContent = dataContent;
      console.log('length = '+dataContent.length);
      console.log(this.listContent);
      event?.target.complete();

      if(event){
        event.target.disabled = dataContent.length === this.currentPage;
      }

    });
  }

  loadMore(event?: InfiniteScrollCustomEvent){
    this.currentPage++;
    this.loadContent(event);
  }

  gotoArticle(id:any){
    console.log('gotoArticle'+id);
    this.router.navigate(['/article', id]);

  }

}
