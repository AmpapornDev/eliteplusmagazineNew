import { Component, OnInit } from '@angular/core';
import { TabService } from '../services/tab.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.page.html',
  styleUrls: ['./detail-article.page.scss'],
})
export class DetailArticlePage implements OnInit {

  dataContent:any;
  imageBaseUrl = environment.imageUrl;
  isReadMore = true;

  constructor(
    private tabService: TabService,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    public navCtrl:NavController) { }
  

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tabService.getArticleDetails(id).subscribe(res => {
      this.dataContent = res.results[0];
      console.log(this.dataContent);
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

}
