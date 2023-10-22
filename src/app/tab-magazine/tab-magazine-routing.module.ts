import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabMagazinePage } from './tab-magazine.page';

const routes: Routes = [
  {
    path: '',
    component: TabMagazinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabMagazinePageRoutingModule {}
