import { IProduct } from "../interfaces";
import { Observable, of } from "rxjs";

export class Product {

  private id;
  private name;
  private price;

  constructor(id: string, name: string, price: number) {
    this.id = id,
    this.name = name,
    this.price = price
  }

  setProductId(id: string) {
    this.id = id;
  }

  getProductId() : string {
    return this.id;
  }

  setProductName(name: string) {
    this.name = name;
  }

  getProductName() : string {
    return this.name;
  }

  setProductPrice(price: number) : void {
    this.price = price;
  }

  getProductPrice() : number {
    return this.price;
  }
}
