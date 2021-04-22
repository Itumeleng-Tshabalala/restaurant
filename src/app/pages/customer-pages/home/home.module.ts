import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { PopularDishesComponent } from 'src/app/components/customer-components/popular-dishes/popular-dishes.component';
import { PopularDrinksComponent } from 'src/app/components/customer-components/popular-drinks/popular-drinks.component';
import { CartComponent } from 'src/app/components/customer-components/cart/cart.component';
import { CategoriesComponent } from 'src/app/components/customer-components/categories/categories.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CartComponent, CategoriesComponent, PopularDishesComponent, PopularDrinksComponent]
})
export class HomePageModule {}
