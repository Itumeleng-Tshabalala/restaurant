import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'tabs/home',
      pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsPage,
    children : [
      {
        path: 'home',
        loadChildren: () => import('../../customer-pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../../../pages/settings/settings.module').then( m => m.SettingsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
