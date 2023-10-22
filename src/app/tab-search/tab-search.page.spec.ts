import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabSearchPage } from './tab-search.page';

describe('TabSearchPage', () => {
  let component: TabSearchPage;
  let fixture: ComponentFixture<TabSearchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
