import TransactionAdjust from './Adjust';
import TransactionAdjustUpdate from './AdjustUpdate';
import TransactionAdjustUpdateDescription from './AdjustUpdateDescription';
import TransactionAdjustUpdateItem from './AdjustUpdateItem';
import TransactionAdjustUpdateSearchItem from './AdjustUpdateSearchItem';
import TransactionAdjustUpdateSearchItemResult from './AdjustUpdateSearchItemResult';

const TransactionAdjustRoute = [
  {
    path: '/menu/transaction/adjust',
    exact: true,
    component: TransactionAdjust
  },
  {
    path: '/menu/transaction/adjust/:id',
    exact: true,
    component: TransactionAdjustUpdate
  },
  {
    path: '/menu/transaction/adjust/:id/description',
    exact: true,
    component: TransactionAdjustUpdateDescription
  },
  {
    path: '/menu/transaction/adjust/:id/order/:order',
    exact: true,
    component: TransactionAdjustUpdateItem
  },
  {
    path: '/menu/transaction/adjust/:id/search',
    exact: true,
    component: TransactionAdjustUpdateSearchItem
  },
  {
    path: '/menu/transaction/adjust/:id/search/id/:id',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/id/:id/name/:name',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/quantity/:quantity',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/quantity/:quantity/location/:location',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/quantity/:quantity/type/:type',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/quantity/:quantity/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/quantity/:quantity/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/location/:location',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/location/:location/type/:type',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/location/:location/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/location/:location/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/id/:id/name/:name/type/:type',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/type/:type/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/type/:type/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/id/:id/name/:name/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/name/:name/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/id/:id/quantity/:quantity',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/quantity/:quantity/location/:location',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/quantity/:quantity/location:location/type/:type/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/quantity/:quantity/type/:type',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/quantity/:quantity/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/quantity/:quantity/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/id/:id/location/:location',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/location/:location/type/:type',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/location/:location/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/location/:location/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/id/:id/type/:type',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/id/:id/type/:type/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/type/:type/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/id/:id/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/id/:id/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/id/:id/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/name/:name',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/name/:name/quantity/:quantity',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/quantity/:quantity/location/:location',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/quantity/:quantity/type/:type',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/quantity/:quantity/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/quantity/:quantity/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/name/:name/location/:location',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/location/:location/type/:type',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/location/:location/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/location/:location/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/name/:name/type/:type',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/type/:type/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/type/:type/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/name/:name/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/name/:name/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/quantity/:quantity',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/quantity/:quantity/location/:location',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/quantity/:quantity/type/:type',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/quantity/:quantity/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/quantity/:quantity/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/location/:location',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/location/:location/type/:type',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/location/:location/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/location/:location/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/type/:type',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/type/:type/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/type/:type/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/group/:group',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/adjust/:id/search/group/:group/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/adjust/:id/search/description/:description',
    exact: true,
    component: TransactionAdjustUpdateSearchItemResult
  }
];

export default TransactionAdjustRoute;
