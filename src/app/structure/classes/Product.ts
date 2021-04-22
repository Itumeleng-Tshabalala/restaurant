import { IProduct } from "../interfaces";
import { Observable, of } from "rxjs";

export class Product {

    private product: IProduct;

    constructor(id: string, name: string, price: number) {
        this.product = {
            id,
            name,
            price,
        }
    }

    getProduct(): IProduct{
        return this.product;
    }

    setProductId(id: string) {
        this.product.id = id;
    }

    getProductId() : string {
        return this.product.id;
    }

    setProductName(name: string) {
        this.product.name = name;
    }

    getProductName() : string {
        return this.product.name;
    }

    setProductPrice(price: number) : void {
        this.product.price = price;
    }

    getProductPrice() : number {
        return this.product.price;
    }

}