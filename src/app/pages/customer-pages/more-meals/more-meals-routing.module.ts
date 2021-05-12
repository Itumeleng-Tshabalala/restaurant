import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreMealsPage } from './more-meals.page';

const routes: Routes = [
  {
    path: '',
    component: MoreMealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreMealsPageRoutingModule {}
