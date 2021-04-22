import { ICart, IProduct } from "../interfaces"

export class Cart{

    private product: IProduct;
    private quantity: number;

    constructor(product, quantity) {
        this.quantity = quantity;
        this.product = product;
    }

    getProduct() : IProduct {
        return this.product;
    }

    getProductId() : string {
        return this.product.id;
    }

    getProductName() : string {
        return this.product.name;
    }

    getProductPrice() : number {
        return this.product.price;
    }

    getProductQuantity() : number {
        return this.quantity;
    }

    setProductQuantity() : void{
        this.quantity++;
    }

    calculateTotalAmount() : number {
        return this.product.price * this.quantity;
    }
}