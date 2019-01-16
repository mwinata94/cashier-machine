import Index from './Index';
import Create from './Create';
import Order from './Order';
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
    path: '/menu/wishlist/order',
    exact: true,
    component: Order
  },
  {
    path: '/menu/wishlist/update/:id',
    exact: true,
    component: Update
  }
];

export default Route;
