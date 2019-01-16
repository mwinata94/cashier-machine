import TransactionReturnPurchase from './ReturnPurchase';
import TransactionReturnPurchaseUpdate from './ReturnPurchaseUpdate';
import TransactionReturnPurchaseUpdateDescription from './ReturnPurchaseUpdateDescription';
import TransactionReturnPurchaseUpdateItem from './ReturnPurchaseUpdateItem';
import TransactionReturnPurchaseUpdateSearchItem from './ReturnPurchaseUpdateSearchItem';
import TransactionReturnPurchaseUpdateSearchItemResult from './ReturnPurchaseUpdateSearchItemResult';

const TransactionReturnPurchaseRoute = [
  {
    path: '/menu/transaction/return purchase',
    exact: true,
    component: TransactionReturnPurchase
  },
  {
    path: '/menu/transaction/return purchase/:tid',
    exact: true,
    component: TransactionReturnPurchaseUpdate
  },
  {
    path: '/menu/transaction/return purchase/:tid/description',
    exact: true,
    component: TransactionReturnPurchaseUpdateDescription
  },
  {
    path: '/menu/transaction/return purchase/:tid/order/:order',
    exact: true,
    component: TransactionReturnPurchaseUpdateItem
  },
  {
    path: '/menu/transaction/return purchase/:tid/search',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItem
  },
  {
    path: '/menu/transaction/return purchase/:tid/search/id/:id',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/return purchase/:tid/search/id/:id/name/:name',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/quantity/:quantity',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/quantity/:quantity/type/:type',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/quantity/:quantity/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/quantity/:quantity/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/location/:location',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/location/:location/type/:type',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/location/:location/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/location/:location/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/type/:type',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/type/:type/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/type/:type/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/name/:name/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/quantity/:quantity',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/quantity/:quantity/location/:location',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/quantity/:quantity/location:location/type/:type/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/quantity/:quantity/type/:type',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/quantity/:quantity/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/quantity/:quantity/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/location/:location',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/location/:location/type/:type',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/location/:location/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/location/:location/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/return purchase/:tid/search/id/:id/type/:type',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/type/:type/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/type/:type/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/return purchase/:tid/search/id/:id/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/id/:id/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/return purchase/:tid/search/name/:name',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/quantity/:quantity',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/quantity/:quantity/location/:location',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/quantity/:quantity/type/:type',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/quantity/:quantity/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/quantity/:quantity/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/location/:location',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/location/:location/type/:type',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/location/:location/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/location/:location/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/return purchase/:tid/search/name/:name/type/:type',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/type/:type/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/type/:type/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/name/:name/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/return purchase/:tid/search/quantity/:quantity',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/quantity/:quantity/location/:location',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/quantity/:quantity/type/:type',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/quantity/:quantity/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/quantity/:quantity/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/return purchase/:tid/search/location/:location',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/location/:location/type/:type',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/location/:location/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/location/:location/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/return purchase/:tid/search/type/:type',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/type/:type/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/type/:type/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/return purchase/:tid/search/group/:group',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/group/:group/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/return purchase/:tid/search/description/:description',
    exact: true,
    component: TransactionReturnPurchaseUpdateSearchItemResult
  }
];

export default TransactionReturnPurchaseRoute;
