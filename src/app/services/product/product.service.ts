import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/structure/classes/Product';
import { PRODUCTS } from 'src/app/structure/data';
import { IProduct } from 'src/app/structure/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];

  constructor() { }

  getProductById(product_id: string) : Observable<Product> {
    let temp_product: IProduct;
    temp_product = PRODUCTS.find(product => {
      return product.id == product_id;
    });
    return of(new Product(
      temp_product.id,
      temp_product.name,
      temp_product.price
    ));
  }

  getProducts() : Observable<Product[]> {
    let temp_product: Product;
    PRODUCTS.map(product => {
      temp_product = new Product(
        product.id, 
        product.name,
        product.price
      );
      this.products.push(temp_product);
    });
    return of(this.products);
  }
}
