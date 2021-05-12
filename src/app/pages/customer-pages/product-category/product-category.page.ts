/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { CartComponent } from 'src/app/components/customer-components/cart/cart.component';
import { ProductDetailsComponent } from 'src/app/components/customer-components/product-details/product-details.component';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/structure/classes/Product';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.page.html',
  styleUrls: ['./product-category.page.scss'],
})
export class ProductCategoryPage implements OnInit {

  quantity = 0;
  products: Product[] = [];

  constructor(
    private router: Router,
    private _cartService: CartService,
    private activeRoute: ActivatedRoute,
    private _productService: ProductService,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      this.getProducts(params.id);
      this.getTotalQuantity();
    });
  }

  // Add to cart
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

  // Set products
  getProducts(id: string) {
    this._productService.getProductsByCategory(id).subscribe(
      (responses) => {
        responses.map(product => {
          this.products.push(product);
        });
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
