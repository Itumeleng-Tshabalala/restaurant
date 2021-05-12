import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs-page/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/driver-pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'more',
    loadChildren: () => import('./pages/customer-pages/more/more.module').then( m => m.MorePageModule)
  },
  {
    path: 'product-category',
    loadChildren: () => import('./pages/customer-pages/product-category/product-category.module').then( m => m.ProductCategoryPageModule)
  },
  {
    path: 'more-meals',
    loadChildren: () => import('./pages/customer-pages/more-meals/more-meals.module').then( m => m.MoreMealsPageModule)
  },
  {
    path: 'more-drinks',
    loadChildren: () => import('./pages/customer-pages/more-drinks/more-drinks.module').then( m => m.MoreDrinksPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
