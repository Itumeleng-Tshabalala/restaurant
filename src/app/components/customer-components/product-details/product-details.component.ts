/* eslint-disable no-underscore-dangle */
import { Component, Input, OnInit } from '@angular/core';
import { AnimationController, PopoverController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/structure/classes/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private _cartService: CartService,
  ) { }

  ngOnInit() {}

  addToCart(product: Product) {
    this._cartService.addToCart(product);
  }


}
