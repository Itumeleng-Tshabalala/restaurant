import { ICart, ICategory, IProduct } from "./interfaces";

export const PRODUCTS: IProduct[] = [
    {
        id: '1',
        name: 'number 1',
        price: 1000
    },
    {
        id: '2',
        name: 'number 2',
        price: 1000
    }
];

export let CART: ICart[] = [];

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

