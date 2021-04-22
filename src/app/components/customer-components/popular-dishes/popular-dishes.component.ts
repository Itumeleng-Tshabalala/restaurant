import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/structure/classes/Product';
import { IProduct } from 'src/app/structure/interfaces';

@Component({
  selector: 'app-popular-dishes',
  templateUrl: './popular-dishes.component.html',
  styleUrls: ['./popular-dishes.component.scss'],
})
export class PopularDishesComponent implements OnInit {

  @Input() products: IProduct[] = [];
  
  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };
  
  constructor(
    private _cartService: CartService,
    private _productService: ProductService
  ) { }

  ngOnInit() {}

  addToCart(product: IProduct) {
    let temp_product: Product;
    temp_product = new Product(
      product.id, 
      product.name, 
      product.price
    );
    this._cartService.addToCart(temp_product);
  }

}
