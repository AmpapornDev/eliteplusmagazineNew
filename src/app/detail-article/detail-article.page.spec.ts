import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailArticlePage } from './detail-article.page';

describe('DetailArticlePage', () => {
  let component: DetailArticlePage;
  let fixture: ComponentFixture<DetailArticlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
