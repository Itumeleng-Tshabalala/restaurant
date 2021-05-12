import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreMealsPageRoutingModule } from './more-meals-routing.module';

import { MoreMealsPage } from './more-meals.page';
import { ComponentsModule } from 'src/app/modules/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreMealsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MoreMealsPage]
})
export class MoreMealsPageModule {}
