/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Cart } from 'src/app/structure/classes/Cart';
import { Product } from 'src/app/structure/classes/Product';
import { CART } from 'src/app/structure/data';
import { IProduct } from 'src/app/structure/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  total: BehaviorSubject<number> = new BehaviorSubject<number>(0.0);
  quantity: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  getCart(): Observable<Cart[]> {
    return of(CART);
  }

  getCartTotal(): BehaviorSubject<number> {
    return this.total;
  }

  getCartQuantity(): BehaviorSubject<number> {
    return this.quantity;
  }

  searchProduct(search: string) {
    const regExp = /Number/g;


  }

  getCartItemById(product_id: string): Observable<Cart> {
    return of(CART.find(item => item.getProduct().getProductId() === product_id));
  }

  setCartQuantity(): void {
    let quantity = 0;
    CART.map(item => {
      quantity += item.getProductQuantity();
    });
    this.quantity.next(quantity);
  }

  setCartTotal(): void {
    let total = 0;
    CART.map(item => {
      total += item.calculateTotalAmount();
    });
    this.total.next(total);
  }

  checkDuplicate(product_id: string): boolean {
    if(CART.find(item => item.getProduct().getProductId() === product_id) !== undefined) {
      return true;
    }
    return false;
  }

  addToCart(product: Product): void {
    let temp_cart: Cart;
    if(this.checkDuplicate(product.getProductId())) {
      this.getCartItemById(product.getProductId()).subscribe(
        item => {
          temp_cart = item;
          temp_cart.setProductQuantity();
        }
      );
    }
    else {
      temp_cart = new Cart(product, 1);
      CART.push(temp_cart);
    }
    this.setCartTotal();
    this.setCartQuantity();
  }

}
