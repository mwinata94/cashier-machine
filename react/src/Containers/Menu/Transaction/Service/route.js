import TransactionService from './Service';
import TransactionServiceUpdate from './ServiceUpdate';
import TransactionServiceUpdateDescription from './ServiceUpdateDescription';
import TransactionServiceUpdateInstruction from './ServiceUpdateInstruction';
import TransactionServiceUpdateItem from './ServiceUpdateItem';
import TransactionServiceUpdateSearchItem from './ServiceUpdateSearchItem';
import TransactionServiceUpdateSearchItemResult from './ServiceUpdateSearchItemResult';

const TransactionServiceRoute = [
  {
    path: '/menu/transaction/service',
    exact: true,
    component: TransactionService
  },
  {
    path: '/menu/transaction/service/:tid',
    exact: true,
    component: TransactionServiceUpdate
  },
  {
    path: '/menu/transaction/service/:tid/instruction',
    exact: true,
    component: TransactionServiceUpdateInstruction
  },
  {
    path: '/menu/transaction/service/:tid/description',
    exact: true,
    component: TransactionServiceUpdateDescription
  },
  {
    path: '/menu/transaction/service/:tid/order/:order',
    exact: true,
    component: TransactionServiceUpdateItem
  },
  {
    path: '/menu/transaction/service/:tid/search',
    exact: true,
    component: TransactionServiceUpdateSearchItem
  },
  {
    path: '/menu/transaction/service/:tid/search/id/:id',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/service/:tid/search/id/:id/name/:name',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/quantity/:quantity',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/quantity/:quantity/type/:type',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/quantity/:quantity/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/quantity/:quantity/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/location/:location',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/location/:location/type/:type',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/location/:location/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/location/:location/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/service/:tid/search/id/:id/name/:name/type/:type',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/type/:type/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/type/:type/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/name/:name/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/service/:tid/search/id/:id/quantity/:quantity',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/quantity/:quantity/location/:location',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/quantity/:quantity/location:location/type/:type/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/quantity/:quantity/type/:type',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/quantity/:quantity/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/quantity/:quantity/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/service/:tid/search/id/:id/location/:location',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/location/:location/type/:type',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/location/:location/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/location/:location/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/service/:tid/search/id/:id/type/:type',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/type/:type/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/type/:type/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/service/:tid/search/id/:id/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/id/:id/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/service/:tid/search/name/:name',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/service/:tid/search/name/:name/quantity/:quantity',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/quantity/:quantity/location/:location',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/quantity/:quantity/type/:type',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/quantity/:quantity/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/quantity/:quantity/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/service/:tid/search/name/:name/location/:location',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/location/:location/type/:type',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/location/:location/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/location/:location/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/service/:tid/search/name/:name/type/:type',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/type/:type/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/type/:type/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/service/:tid/search/name/:name/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/name/:name/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/service/:tid/search/quantity/:quantity',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/quantity/:quantity/location/:location',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/service/:tid/search/quantity/:quantity/type/:type',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/quantity/:quantity/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/quantity/:quantity/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/service/:tid/search/location/:location',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/service/:tid/search/location/:location/type/:type',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/location/:location/type/:type/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/location/:location/type/:type/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/location/:location/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/location/:location/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/location/:location/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/service/:tid/search/type/:type',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/service/:tid/search/type/:type/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/type/:type/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/type/:type/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/service/:tid/search/group/:group',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path:
      '/menu/transaction/service/:tid/search/group/:group/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  },
  {
    path: '/menu/transaction/service/:tid/search/description/:description',
    exact: true,
    component: TransactionServiceUpdateSearchItemResult
  }
];

export default TransactionServiceRoute;
