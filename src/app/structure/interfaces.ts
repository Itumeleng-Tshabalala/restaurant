import { Product } from "./classes/Product";

export interface IProduct {
    id: string;
    name: string;
    price: number;
}

export interface ICart {
    product: IProduct;
    quantity: number;
}

export interface ICategory{
    name: string;
    color: string;
    image: string;
}