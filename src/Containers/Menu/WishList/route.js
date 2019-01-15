import Index from './Index';
import Update from './Update';

const Route = [
  {
    path: '/menu/wishlist',
    exact: true,
    component: Index
  },
  {
    path: '/menu/wishlist/update/:id',
    exact: true,
    component: Update
  }
];

export default Route;
