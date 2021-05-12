import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateComponent } from 'src/app/components/customer-components/rate/rate.component';
import { ProductDetailsComponent } from 'src/app/components/customer-components/product-details/product-details.component';
import { CartComponent } from 'src/app/components/customer-components/cart/cart.component';
import { CategoriesComponent } from 'src/app/components/customer-components/categories/categories.component';
import { PopularDishesComponent } from 'src/app/components/customer-components/popular-dishes/popular-dishes.component';
import { PopularDrinksComponent } from 'src/app/components/customer-components/popular-drinks/popular-drinks.component';
import { ProductCategoryPage } from 'src/app/pages/customer-pages/product-category/product-category.page';



@NgModule({
  declarations: [
    RateComponent,
    ProductDetailsComponent,
    CartComponent,
    CategoriesComponent,
    PopularDishesComponent,
    PopularDrinksComponent,
    // ProductCategoryPage
  ],
  imports: [
    CommonModule,
    //
  ],
  exports: [
    RateComponent,
    ProductDetailsComponent,
    CartComponent,
    CategoriesComponent,
    PopularDishesComponent,
    PopularDrinksComponent,
    // ProductCategoryPage
  ]
})
export class ComponentsModule { }
