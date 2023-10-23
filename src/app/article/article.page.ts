import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.addItems(5);
  }

  addItems(count:any, unread = false) {
    for (let i = 0; i < count; i++) {
      this.items.unshift({
        unread: unread,
      });
    }
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      this.addItems(3, true);
      event.target.complete();
    }, 2000);
  }

}
