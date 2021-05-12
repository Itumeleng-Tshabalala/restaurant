import { Product } from './classes/Product';

export interface IProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  rate: number;
  category: string;
  description: string;
  available: boolean;
}

export interface ICategory{
    id: string;
    name: string;
    color: string;
    image: string;
}
