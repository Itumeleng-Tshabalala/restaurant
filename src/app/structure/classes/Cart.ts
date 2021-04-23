import { Product } from "./Product";

export class Cart{

  private product: Product;
  private quantity: number;

  constructor(product: Product, quantity: number) {
    this.quantity = quantity;
    this.product = new Product(
      product.getProductId(),
      product.getProductName(),
      product.getProductPrice()
    );
  }

  getProduct() : Product {
  	return this.product;
  }

  getProductId() : string {
    return this.product.getProductId();
  }

  getProductName() : string {
	  return this.product.getProductName();
  }

  getProductPrice() : number {
	  return this.product.getProductPrice();
  }

  getProductQuantity() : number {
	  return this.quantity;
  }

  setProductQuantity() : void{
	  this.quantity++;
  }

  calculateTotalAmount() : number {
	  return this.product.getProductPrice() * this.quantity;
  }
}
