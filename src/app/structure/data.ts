import { Cart } from './classes/Cart';
import { ICategory, IProduct } from './interfaces';

export const CART: Cart[] = [];

export const PRODUCTS: IProduct[] = [
  {
    id: '1',
    name: 'Double Beef',
    image: 'https://taste.co.za/wp-content/uploads/2018/08/Double-beef-burger.png',
    price: 26.00,
    category: '3',
    description: 'Double beef burger with smoked cheddar and sriracha mayo',
    available: true
  },
  // {
  //   id: '',
  //   name: '',
  //   image: '',
  //   price: 10.00,
  //   category: '',
  //   description: '',
  //   available: true
  // },
  {
    id: '3',
    name: 'Mozzarella Cheese',
    image: 'https://www.recipetineats.com/wp-content/uploads/2020/05/Pizza-Crust-without-yeast_5-SQ.jpg',
    price: 99.99,
    category: '4',
    description: 'Mozzarella Cheese Pizza',
    available: true
  },
  // {
  //   id: '',
  //   name: '',
  //   image: '',
  //   price: 10.00,
  //   category: '',
  //   description: '',
  //   available: true
  // },
  // {
  //   id: '',
  //   name: '',
  //   image: '',
  //   price: 10.00,
  //   category: '',
  //   description: '',
  //   available: true
  // },
  // {
  //   id: '',
  //   name: '',
  //   image: '',
  //   price: 10.00,
  //   category: '',
  //   description: '',
  //   available: true
  // },
  // {
  //   id: '',
  //   name: '',
  //   image: '',
  //   price: 10.00,
  //   category: '',
  //   description: '',
  //   available: true
  // },
  // {
  //   id: '',
  //   name: '',
  //   image: '',
  //   price: 10.00,
  //   category: '',
  //   description: '',
  //   available: true
  // },
  // {
  //   id: '',
  //   name: '',
  //   image: '',
  //   price: 10.00,
  //   category: '',
  //   description: '',
  //   available: true
  // },
  // {
  //   id: '',
  //   name: '',
  //   image: '',
  //   price: 10.00,
  //   category: '',
  //   description: '',
  //   available: true
  // },
  // {
  //   id: '',
  //   name: '',
  //   image: '',
  //   price: 10.00,
  //   category: '',
  //   description: '',
  //   available: true
  // },
  // {
  //   id: '',
  //   name: '',
  //   image: '',
  //   price: 10.00,
  //   category: '',
  //   description: '',
  //   available: true
  // }
];

export const CATEGORIES: ICategory[] = [
    {
      id: '1',
      color: 'danger',
      image: 'dish.svg',
      name: 'Food',

    },
    {
      id: '2',
      color: 'primary',
      image: 'cocktail.svg',
      name: 'Drink',

    },
    {
      id: '3',
      color: 'warning',
      image: 'burger.svg',
      name: 'Burger',

    },
    {
      id: '4',
      color: 'success',
      image: 'pizza.svg',
      name: 'Pizza',

    },
    {
      id: '5',
      color: 'tertiary',
      image: 'taco.svg',
      name: 'Mexican',

    },
    {
      id: '6',
      color: 'danger',
      image: 'cookies.svg',
      name: 'Dessert',

    },
    {
      id: '7',
      color: 'secondary',
      image: 'noodle.svg',
      name: 'Noodle',

    }
];

