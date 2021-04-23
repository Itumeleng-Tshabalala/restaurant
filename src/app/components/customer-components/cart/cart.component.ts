import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Cart } from 'src/app/structure/classes/Cart';
// import { ICart } from 'src/app/structure/interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  cart: Cart[] = [];

  constructor(
    private _cartService: CartService,
    private _productService: ProductService
  ) { }

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    let temp_cart: Cart;
    this._cartService.getCart().subscribe(
      cart => {
        this.cart = cart.map(item => {
          return item;
        });
      }
    );
  }
}
