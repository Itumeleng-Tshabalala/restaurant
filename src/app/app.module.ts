import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { RateComponent } from './components/customer-components/rate/rate.component';
import { HomePageModule } from './pages/customer-pages/home/home.module';
import { ProductCategoryPageModule } from './pages/customer-pages/product-category/product-category.module';
import { ComponentsModule } from './modules/components/components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HomePageModule,
    ProductCategoryPageModule,
    ComponentsModule,
  ],
  exports: [
    //
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
