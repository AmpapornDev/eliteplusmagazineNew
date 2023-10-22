import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-home',
        loadChildren: () => import('../tab-home/tab-home.module').then( m => m.TabHomePageModule)
      },
      {
        path: 'tab-fav',
        loadChildren: () => import('../tab-fav/tab-fav.module').then( m => m.TabFavPageModule)
      },
      {
        path: 'tab-magazine',
        loadChildren: () => import('../tab-magazine/tab-magazine.module').then( m => m.TabMagazinePageModule)
      },
      {
        path: 'tab-search',
        loadChildren: () => import('../tab-search/tab-search.module').then( m => m.TabSearchPageModule)
      },
      {
        path: 'tab-profile',
        loadChildren: () => import('../tab-profile/tab-profile.module').then( m => m.TabProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab-home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
