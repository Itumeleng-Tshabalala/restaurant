/* eslint-disable no-underscore-dangle */
import { Component, Input, OnInit } from '@angular/core';
import { AnimationController, PopoverController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/structure/classes/Product';
import { IProduct } from 'src/app/structure/interfaces';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-popular-dishes',
  templateUrl: './popular-dishes.component.html',
  styleUrls: ['./popular-dishes.component.scss'],
})
export class PopularDishesComponent implements OnInit {

  products: Product[] = [];

  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };

  constructor(
    private _cartService: CartService,
    private _productService: ProductService,
    private animationCtrl: AnimationController,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.getPopularMeals();
  }

  addToCart(product: Product) {
    this._cartService.addToCart(product);
  }

  getPopularMeals() {
    this._productService.getPopularMeals(4).subscribe(
      products => {
        this.products = products;
      }
    );
  }

  async presentPopover(ev: any, product: Product) {
    const popover = await this.popoverController.create({
      component: ProductDetailsComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      componentProps: {
        product
      }
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }
}
