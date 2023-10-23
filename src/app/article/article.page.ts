import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

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
  
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(){
    this.getTodos();
  }


  getTodos(event?:any) {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((data: any) => {
      this.todos = data;
      if (event) {
        event.target.complete();
      }
    });
  }

}
