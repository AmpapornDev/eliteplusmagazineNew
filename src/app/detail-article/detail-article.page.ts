import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { TabService } from '../services/tab.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.page.html',
  styleUrls: ['./detail-article.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailArticlePage implements OnInit {

  dataContent:any;
  dataAlsoLike:any;
  imageBaseUrl = environment.imageUrl;
  isReadMore = true;

  constructor(
    private tabService: TabService,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    public navCtrl:NavController,
    private http: HttpClient) { }
  

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tabService.getArticleDetails(id).subscribe(res => {
      this.dataContent = res.results[0];
      console.log(this.dataContent.id_menu);
      this.listAlsoLike(this.dataContent.id_menu,this.dataContent.id_content);

    });

  }
  transform(html: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }

  gotoHomepage(){
    console.log('gotoHomepage');
    this.navCtrl.navigateForward('tabs/tab-home');
  }

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  listAlsoLike(id_menu:any, id_content:any){
    this.http.get<any>(`${environment.baseUrl}/ws_also_like.php?var_id_menu=`+id_menu+`&var_id_content=`+id_content)
    .subscribe(resAlsoLike => {
      this.dataAlsoLike = resAlsoLike;
      console.log(this.dataAlsoLike);
    });

  }

  

}
