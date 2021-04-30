import { Product } from './Product';

export class Cart{

  private product: Product;
  private quantity: number;

  constructor(product: Product, quantity: number) {
    this.quantity = quantity;
    this.product = new Product(
      product.getProductId(),
      product.getProductName(),
      product.getProductImage(),
      product.getProductPrice(),
      product.getProductCategory(),
      product.getProductDescription(),
      product.getProductAvailability()
    );
  }

  getProduct(): Product {
  	return this.product;
  }

  getProductQuantity(): number {
	  return this.quantity;
  }

  setProductQuantity(): void{
	  this.quantity++;
  }

  calculateTotalAmount(): number {
	  return this.product.getProductPrice() * this.quantity;
  }
}
