import Index from './Index';
import Create from './Create';
import Update from './Update';

const Route = [
  {
    path: '/menu/wishlist',
    exact: true,
    component: Index
  },
  {
    path: '/menu/wishlist/create',
    exact: true,
    component: Create
  },
  {
    path: '/menu/wishlist/update/:id',
    exact: true,
    component: Update
  }
];

export default Route;
