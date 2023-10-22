import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoadingController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { MagazineService } from '../services/magazine.service';

@Component({
  selector: 'app-tab-magazine',
  templateUrl: './tab-magazine.page.html',
  styleUrls: ['./tab-magazine.page.scss'],
})
export class TabMagazinePage implements OnInit {

  myDataArrayMagazine:any=[];
  imageBaseUrl = environment.imageUrl;
  webServiceUrl = environment.baseUrl;
  currentPage = 1;

  constructor(
    private http: HttpClient,
    private loadingCtral: LoadingController,
    private magazineService: MagazineService
    ) { }

  ngOnInit():void{
    this.loadMagazine();
  }

  async loadMagazine(event?: InfiniteScrollCustomEvent){

    const loading = await this.loadingCtral.create({
      message: 'Loading...', 
      spinner:'bubbles'
    });
    await loading.present();

    this.magazineService.getAllMagazine(this.currentPage).subscribe(res => {
      loading.dismiss();
      this.myDataArrayMagazine = res;
      //this.magazineService.push(...res.results);
      //console.log('length = '+res.results.length);
      console.log(res);
      event?.target.complete();

      if(event){
        event.target.disabled = res.length === this.currentPage;
      }

    });
  }

  loadMore(event?: InfiniteScrollCustomEvent){
    this.currentPage++;
    this.loadMagazine(event);
  }

}
