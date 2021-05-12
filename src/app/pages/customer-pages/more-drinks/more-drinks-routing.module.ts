import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreDrinksPage } from './more-drinks.page';

const routes: Routes = [
  {
    path: '',
    component: MoreDrinksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreDrinksPageRoutingModule {}
