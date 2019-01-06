import TransactionPurchase from './Purchase';
import TransactionPurchaseUpdate from './PurchaseUpdate';
import TransactionPurchaseUpdateDescription from './PurchaseUpdateDescription';
import TransactionPurchaseUpdateItem from './PurchaseUpdateItem';
import TransactionPurchaseUpdateSearchItem from './PurchaseUpdateSearchItem';
import TransactionPurchaseUpdateSearchItemResult from './PurchaseUpdateSearchItemResult';

const TransactionPurchaseRoute = [
  {
    path: '/menu/transaction/purchase',
    exact: true,
    component: TransactionPurchase
  },
  {
    path: '/menu/transaction/purchase/:tid',
    exact: true,
    component: TransactionPurchaseUpdate
  },
  {
    path: '/menu/transaction/purchase/:tid/description',
    exact: true,
    component: TransactionPurchaseUpdateDescription
  },
  {
    path: '/menu/transaction/purchase/:tid/order/:order',
    exact: true,
    component: TransactionPurchaseUpdateItem
  },
  {
    path: '/menu/transaction/purchase/:tid/search',
    exact: true,
    component: TransactionPurchaseUpdateSearchItem
  },
  {
    path: '/menu/transaction/purchase/:tid/search/id/:id',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/purchase/:tid/search/id/:id/name/:name',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/quantity/:quantity',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/quantity/:quantity/type/:type',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/quantity/:quantity/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/quantity/:quantity/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/location/:location',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/location/:location/type/:type',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/location/:location/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/location/:location/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/purchase/:tid/search/id/:id/name/:name/type/:type',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/type/:type/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/type/:type/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/name/:name/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/purchase/:tid/search/id/:id/quantity/:quantity',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/quantity/:quantity/location/:location',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/quantity/:quantity/location:location/type/:type/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/quantity/:quantity/type/:type',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/quantity/:quantity/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/quantity/:quantity/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/purchase/:tid/search/id/:id/location/:location',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/location/:location/type/:type',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/location/:location/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/location/:location/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/purchase/:tid/search/id/:id/type/:type',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/type/:type/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/type/:type/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/purchase/:tid/search/id/:id/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/id/:id/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/purchase/:tid/search/name/:name',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/quantity/:quantity',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/quantity/:quantity/location/:location',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/quantity/:quantity/type/:type',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/quantity/:quantity/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/quantity/:quantity/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/location/:location',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/location/:location/type/:type',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/location/:location/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/location/:location/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/purchase/:tid/search/name/:name/type/:type',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/type/:type/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/type/:type/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/purchase/:tid/search/name/:name/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/name/:name/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/purchase/:tid/search/quantity/:quantity',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/quantity/:quantity/location/:location',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/quantity/:quantity/type/:type',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/quantity/:quantity/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/quantity/:quantity/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/purchase/:tid/search/location/:location',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/location/:location/type/:type',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/location/:location/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/location/:location/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/purchase/:tid/search/type/:type',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/purchase/:tid/search/type/:type/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/type/:type/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/purchase/:tid/search/group/:group',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/purchase/:tid/search/group/:group/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/purchase/:tid/search/description/:description',
    exact: true,
    component: TransactionPurchaseUpdateSearchItemResult
  }
];

export default TransactionPurchaseRoute;
