import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabMagazinePage } from './tab-magazine.page';

describe('TabMagazinePage', () => {
  let component: TabMagazinePage;
  let fixture: ComponentFixture<TabMagazinePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabMagazinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
