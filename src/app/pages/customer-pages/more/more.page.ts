/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { AnimationController, PopoverController } from '@ionic/angular';
import { CartComponent } from 'src/app/components/customer-components/cart/cart.component';
import { ProductDetailsComponent } from 'src/app/components/customer-components/product-details/product-details.component';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/structure/classes/Product';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  quantity = 0;

  constructor(
    private _cartService: CartService,
    private _productService: ProductService,
    private animationCtrl: AnimationController,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {}

  addToCart(product: Product) {
    this._cartService.addToCart(product);
  }

  // Get total Quantity
  getTotalQuantity() {
    this._cartService.getCartQuantity().subscribe(
      quantity => {
        this.quantity = quantity;
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
    console.log('onDidDismiss resolved with role', role);
  }

  async presentCartPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: CartComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
