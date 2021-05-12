/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { AnimationController, PopoverController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Cart } from 'src/app/structure/classes/Cart';
import { Product } from 'src/app/structure/classes/Product';
import { ProductDetailsComponent } from '../product-details/product-details.component';
// import { ICart } from 'src/app/structure/interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  total = 0;
  cart: Cart[] = [];

  constructor(
    private _cartService: CartService,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.getCart();
    this.getCartTotal();
  }

  close() {
    console.log('closing...');
  }

  addToCart(product: Product) {
    this._cartService.addToCart(product);
  }

  getCart() {
    this._cartService.getCart().subscribe(
      cart => {
        this.cart = cart.map(item => item);
      }
    );
  }

  getCartTotal() {
    this._cartService.getCartTotal().subscribe(
      total => {
        this.total = total;
      }
    );
  }

  deleteItem(id: string) {
    this._cartService.deleteItem(id);
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
    console.log('onDidDismiss resolved with role', role);
  }
}
