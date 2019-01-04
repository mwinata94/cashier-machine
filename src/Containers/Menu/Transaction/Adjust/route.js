import TransactionAdjust from './Adjust';
import TransactionAdjustEdit from './AdjustEdit';

const TransactionAdjustRoute = [
  {
    path: '/menu/transaction/adjust',
    exact: true,
    component: TransactionAdjust
  },
  {
    path: '/menu/transaction/adjust/:id',
    exact: true,
    component: TransactionAdjustEdit
  }
];

export default TransactionAdjustRoute;
