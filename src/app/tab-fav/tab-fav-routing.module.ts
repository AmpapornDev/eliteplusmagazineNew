import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabFavPage } from './tab-fav.page';

const routes: Routes = [
  {
    path: '',
    component: TabFavPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabFavPageRoutingModule {}
