import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cart } from 'src/app/structure/classes/Cart';
import { Product } from 'src/app/structure/classes/Product';
import { CART } from 'src/app/structure/data';
import { IProduct } from 'src/app/structure/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCart() : Observable<Cart[]> {
    return of(CART);
  }

  getCartItemById(product_id: string) : Cart {
    return CART.find(item => {
      return item.getProductId() === product_id;
    })
  }

  checkDuplicate(product_id: string) : boolean {
    if(CART.find(item => {
      return item.getProductId() == product_id;
    }) != undefined) {
      return true;
    }
    return false;
  }

  addToCart(product: Product) : void {
    let temp_cart: Cart;
    if(this.checkDuplicate(product.getProductId())) {
      temp_cart = this.getCartItemById(product.getProductId());
      temp_cart.setProductQuantity();
    }
    else {
      temp_cart = new Cart(product, 1);
      CART.push(temp_cart);
    }
  }

}
