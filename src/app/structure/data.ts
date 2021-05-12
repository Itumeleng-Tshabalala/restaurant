import { Cart } from './classes/Cart';
import { ICategory, IProduct } from './interfaces';

export const CART: Cart[] = [];

export const PRODUCTS: IProduct[] = [
  {
    id: '1',
    name: 'Double Beef',
    image: 'https://taste.co.za/wp-content/uploads/2018/08/Double-beef-burger.png',
    price: 26.00,
    rate: 4,
    category: '3',
    description: 'Double beef burger with smoked cheddar and sriracha mayo',
    available: true
  },
  {
    id: '31',
    name: 'Kingsley',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY54mMtbNwNfcJp3Zc7TpyT7EA2dvkDzlx4Q&usqp=CAU',
    price: 11.00,
    rate: 4,
    category: '2',
    description: 'Kingsley products description',
    available: true
  },
  {
    id: '3',
    name: 'Mozzarella Cheese',
    image: 'https://www.recipetineats.com/wp-content/uploads/2020/05/Pizza-Crust-without-yeast_5-SQ.jpg',
    price: 99.99,
    rate: 3,
    category: '4',
    description: 'Mozzarella Cheese Pizza',
    available: true
  },
  {
    id: '4',
    name: 'Vegan Burritos',
    image: 'https://jessicainthekitchen.com/wp-content/uploads/2020/06/Vegan-Burritos-8-500x500.jpg',
    price: 139.99,
    rate: 4,
    category: '5',
    description: '',
    available: true
  },
  {
    id: '5',
    name: 'Chocolate Lava',
     image: 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2018/10/Hairy-Bikers-chocolate-yule-log.jpg',
     price: 29.99,
     rate: 5,
    category: '6',
    description: '',
    available: true
  },
  {
    id: '28',
    name: 'Pap & Wors',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY54mMtbNwNfcJp3Zc7TpyT7EA2dvkDzlx4Q&usqp=CAU',
    price: 45.00,
    rate: 5,
    category: '1',
    description: 'Pap & Wors Description',
    available: true
  },
  {
    id: '29',
    name: 'Coke',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY54mMtbNwNfcJp3Zc7TpyT7EA2dvkDzlx4Q&usqp=CAU',
    price: 10.00,
    rate: 5,
    category: '2',
    description: 'Coca Cola products',
    available: true
  },
  {
    id: '30',
    name: 'Haka Noodles',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY54mMtbNwNfcJp3Zc7TpyT7EA2dvkDzlx4Q&usqp=CAU',
    price: 10.00,
    rate: 1,
    category: '7',
    description: 'Indian Chinese dish made by stir frying hakka noodles with veggies, sauces and garlic.',
    available: true
  }
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

