/* eslint-disable @typescript-eslint/naming-convention */
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
  productsByCategory: Product[] = [];

  constructor() { }

  searchProduct(search: string): Observable<Product[]> {
    return of(
      this.products.filter(
        product => product.getProductName().toLowerCase().indexOf(search.toLowerCase()) > -1
      )
    );
  }

  getProductById(product_id: string): Observable<Product> {
    const temp_product: IProduct = PRODUCTS.find(product => product.id === product_id);
    return of(new Product(
      temp_product.id,
      temp_product.name,
      temp_product.image,
      temp_product.price,
      temp_product.category,
      temp_product.description,
      temp_product.available,
    ));
  }

  getProducts(): Observable<Product[]> {
    let temp_product: Product;
    PRODUCTS.map(product => {
      temp_product = new Product(
        product.id,
        product.name,
        product.image,
        product.price,
        product.category,
        product.description,
        product.available
      );
      this.products.push(temp_product);
    });
    return of(this.products);
  }

  getProductsByCategory(id: string): Observable<Product[]> {
    this.productsByCategory = [];
    const products: IProduct[] = PRODUCTS.filter(product => product.category === id);
    products.map(product =>  {
        this.productsByCategory.push(
          new Product(
            product.id,
            product.name,
            product.image,
            product.price,
            product.category,
            product.description,
            product.available
          )
        );
      }
    );
    return of(this.productsByCategory);
  }
}
