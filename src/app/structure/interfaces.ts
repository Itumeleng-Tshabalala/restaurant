import { Product } from "./classes/Product";

export interface IProduct {
    id: string;
    name: string;
    price: number;
    categoty: string;
}

export interface ICategory{
    name: string;
    color: string;
    image: string;
}
