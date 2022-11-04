import {Food} from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'Chicken Bhiryani',
    price: 200,
    cookTime: '30-40',
    favorite: true,
    origins: ['Hyderabad'],
    stars: 5,
    imageUrl: 'assets/food1.jpg',
    tags:['Heavy food','Lunch']
  },
  {
    id: '2',
    name: 'Veg Bhiryani',
    price: 100,
    cookTime: '35-40',
    favorite: false,
    origins: ['Hyderabad','Vizag'],
    stars: 4,
    imageUrl: 'assets/food2.jpg',
    tags:['Fast food','Lunch']
  },
  {
    id: '3',
    name: 'Veg Noodils',
    price: 75,
    cookTime: '25-30',
    favorite: true,
    origins: ['Hyderabad','Vizag'],
    stars: 4,
    imageUrl: 'assets/food3.jpg',
    tags:['Fast food']
  },
  {
    id: '4',
    name: 'Full meals',
    price: 120,
    cookTime: '25-30',
    favorite: false,
    origins: ['Vijayawada'],
    stars: 4,
    imageUrl: 'assets/food4.jpg',
    tags:['Lunch','Dinner']
  },
  {
  id: '5',
    name: 'Chicken Soup',
    price: 100,
    cookTime: '25-30',
    favorite: true,
    origins: ['Mumbai'],
    stars: 4,
    imageUrl: 'assets/food5.jpg',
    tags:['Lunch']
  },
  {
  id: '6',
    name: 'Ice cream',
    price: 50,
    cookTime: '10-15',
    favorite: true,
    origins: ['Khammam'],
    stars: 5,
    imageUrl: 'assets/food6.jpg',
    tags:['Desserts']
  },
  {
    id: '7',
      name: 'Romali Roti',
      price: 20,
      cookTime: '10-15',
      favorite: true,
      origins: ['Warangla'],
      stars: 5,
      imageUrl: 'assets/food7.jpg',
      tags:['Lunch']
    }
]

export const sample_tags:Tag[] = [
  { name:'All', count:6},
  { name:'Heavy food', count:1},
  { name:'Lunch', count:3},
  { name:'Fast food', count:2},
  { name:'Dinner', count:1},
  { name:'Desserts', count:1},
]
