import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabService } from '../services/tab.service'; 


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.page.html',
  styleUrls: ['./article-detail.page.scss'],
})
export class ArticleDetailPage implements OnInit {

  id_content = this.route.snapshot.paramMap.get('id');

  constructor(
    private route:ActivatedRoute,
    private tabService: TabService
  ) { 
    console.log("id = "+this.id_content);
  }

  ngOnInit() {
  }

}
