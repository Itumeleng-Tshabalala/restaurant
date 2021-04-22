import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cart } from 'src/app/structure/classes/Cart';
import { Product } from 'src/app/structure/classes/Product';
import { CART } from 'src/app/structure/data';
import { ICart, IProduct } from 'src/app/structure/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCart() : Observable<ICart[]> {
    return of(CART);
  }

  getCartItemById(product_id: string) : ICart {
    return CART.find(item => {
      return item.product.id === product_id;
    })
  }

  checkDuplicate(product_id: string) : boolean {
    if(CART.find(item => {
      return item.product.id == product_id;
    }) != undefined) {
      return true;
    }
    return false;
  }

  addToCart(product: Product) : void {
    let temp_cart: ICart;
    if(this.checkDuplicate(product.getProductId())) {
      temp_cart = this.getCartItemById(product.getProductId());
      temp_cart.quantity++;
    }
    else {
      CART.push({
        product: product.getProduct(),
        quantity: 1,
      });
    }
  }
  
}
