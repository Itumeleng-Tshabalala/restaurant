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

  meals: Product[] = [];
  drinks: Product[] = [];
  products: Product[] = [];
  productsByCategory: Product[] = [];
  popularDrinks: Product[] = [];
  popularMeals: Product[] = [];

  constructor() { }

  searchProduct(search: string): Observable<Product[]> {
    return of(
      this.products.filter(
        product => product.getProductName().toLowerCase().indexOf(search.toLowerCase()) > -1
      )
    );
  }

  getMeals(): Observable<Product[]> {
    this.meals = [];
    PRODUCTS.map(product => {
      if(product.category !== '2') {
        this.meals.push(new Product(
          product.id,
          product.name,
          product.image,
          product.price,
          product.rate,
          product.category,
          product.description,
          product.available
        ));
      }
    });
    return of(this.meals);
  }

  getDrinks(): Observable<Product[]> {
    this.drinks = [];
    PRODUCTS.map(product => {
      if(product.category === '2') {
        this.drinks.push(new Product(
          product.id,
          product.name,
          product.image,
          product.price,
          product.rate,
          product.category,
          product.description,
          product.available
        ));
      }
    });
    return of(this.drinks);
  }

  getPopularMeals(rate): Observable<Product[]> {
    PRODUCTS.map(product => {
      if(product.rate >= rate  && product.category !== '2') {
        this.popularMeals.push(new Product(
          product.id,
          product.name,
          product.image,
          product.price,
          product.rate,
          product.category,
          product.description,
          product.available
        ));
      }
    });
    return of(this.popularMeals);
  }

  getPopularDrinks(rate) {
    PRODUCTS.map(product => {
      if(product.rate >= rate  && product.category === '2') {
        this.popularDrinks.push(new Product(
          product.id,
          product.name,
          product.image,
          product.price,
          product.rate,
          product.category,
          product.description,
          product.available
        ));
      }
    });
    return of(this.popularDrinks);
  }

  getProductById(product_id: string): Observable<Product> {
    const product: IProduct = PRODUCTS.find(prod => prod.id === product_id);
    return of(new Product(
      product.id,
      product.name,
      product.image,
      product.price,
      product.rate,
      product.category,
      product.description,
      product.available,
    ));
  }

  getProducts(): Observable<Product[]> {
    PRODUCTS.map(product => {
      this.products.push(new Product(
        product.id,
        product.name,
        product.image,
        product.price,
        product.rate,
        product.category,
        product.description,
        product.available
      ));
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
            product.rate,
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
