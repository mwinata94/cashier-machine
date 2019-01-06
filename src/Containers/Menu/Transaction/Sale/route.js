import TransactionSale from './Sale';
import TransactionSaleUpdate from './SaleUpdate';
import TransactionSaleUpdateDescription from './SaleUpdateDescription';
import TransactionSaleUpdateItem from './SaleUpdateItem';
import TransactionSaleUpdateSearchItem from './SaleUpdateSearchItem';
import TransactionSaleUpdateSearchItemResult from './SaleUpdateSearchItemResult';

const TransactionSaleRoute = [
  {
    path: '/menu/transaction/sale',
    exact: true,
    component: TransactionSale
  },
  {
    path: '/menu/transaction/sale/:tid',
    exact: true,
    component: TransactionSaleUpdate
  },
  {
    path: '/menu/transaction/sale/:tid/description',
    exact: true,
    component: TransactionSaleUpdateDescription
  },
  {
    path: '/menu/transaction/sale/:tid/order/:order',
    exact: true,
    component: TransactionSaleUpdateItem
  },
  {
    path: '/menu/transaction/sale/:tid/search',
    exact: true,
    component: TransactionSaleUpdateSearchItem
  },
  {
    path: '/menu/transaction/sale/:tid/search/id/:id',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/id/:id/name/:name',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/quantity/:quantity',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/quantity/:quantity/type/:type',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/quantity/:quantity/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/quantity/:quantity/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/location/:location',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/location/:location/type/:type',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/location/:location/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/location/:location/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/id/:id/name/:name/type/:type',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/type/:type/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/type/:type/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/id/:id/name/:name/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/name/:name/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/id/:id/quantity/:quantity',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/quantity/:quantity/location/:location',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/quantity/:quantity/location:location/type/:type/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/quantity/:quantity/type/:type',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/quantity/:quantity/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/quantity/:quantity/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/id/:id/location/:location',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/location/:location/type/:type',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/location/:location/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/location/:location/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/id/:id/type/:type',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/id/:id/type/:type/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/type/:type/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/id/:id/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/id/:id/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/id/:id/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/name/:name',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/name/:name/quantity/:quantity',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/quantity/:quantity/location/:location',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/quantity/:quantity/type/:type',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/quantity/:quantity/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/quantity/:quantity/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/name/:name/location/:location',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/location/:location/type/:type',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/location/:location/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/location/:location/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/name/:name/type/:type',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/type/:type/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/type/:type/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/name/:name/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/name/:name/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/quantity/:quantity',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/quantity/:quantity/location/:location',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/quantity/:quantity/type/:type',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/quantity/:quantity/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/quantity/:quantity/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/location/:location',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/location/:location/type/:type',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/location/:location/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/location/:location/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/type/:type',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/type/:type/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/type/:type/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/group/:group',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/sale/:tid/search/group/:group/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/sale/:tid/search/description/:description',
    exact: true,
    component: TransactionSaleUpdateSearchItemResult
  }
];

export default TransactionSaleRoute;
