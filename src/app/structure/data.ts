import { Cart } from "./classes/Cart";
import { ICategory, IProduct } from "./interfaces";

export let CART: Cart[] = [];

export const PRODUCTS: IProduct[] = [
  {
      id: '1',
      name: 'Cheese Boy',
      price: 1000,
      categoty: 'burger'
  },
  {
      id: '2',
      name: 'Skhambani',
      price: 1000,
      categoty: 'burger'
  }
];

export const CATEGORIES: ICategory[] = [
    {
        color: 'danger',
        image: 'dish.svg',
        name: 'Food',

    },
    {
        color: 'primary',
        image: 'cocktail.svg',
        name: 'Drink',

    },
    {
        color: 'warning',
        image: 'burger.svg',
        name: 'Burger',

    },
    {
        color: 'success',
        image: 'pizza.svg',
        name: 'Pizza',

    },
    {
        color: 'tertiary',
        image: 'taco.svg',
        name: 'Mexican',

    },
    {
        color: 'danger',
        image: 'cookies.svg',
        name: 'Dessert',

    },
    {
        color: 'secondary',
        image: 'noodle.svg',
        name: 'Noodle',

    }
]

