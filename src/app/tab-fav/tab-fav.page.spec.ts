import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabFavPage } from './tab-fav.page';

describe('TabFavPage', () => {
  let component: TabFavPage;
  let fixture: ComponentFixture<TabFavPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabFavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
