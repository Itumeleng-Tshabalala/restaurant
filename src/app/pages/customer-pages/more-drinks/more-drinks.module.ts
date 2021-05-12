import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreDrinksPageRoutingModule } from './more-drinks-routing.module';

import { MoreDrinksPage } from './more-drinks.page';
import { ComponentsModule } from 'src/app/modules/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreDrinksPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MoreDrinksPage]
})
export class MoreDrinksPageModule {}
