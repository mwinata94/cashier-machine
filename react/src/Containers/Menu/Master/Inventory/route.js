import MasterInventory from './Inventory';
import MasterInventoryCreate from './InventoryCreate';
import MasterInventoryUpdate from './InventoryUpdate';
import MasterInventorySearch from './InventorySearch';

const MasterInventoryRoute = [
  {
    path: '/menu/master/inventory',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/create',
    exact: true,
    component: MasterInventoryCreate
  },
  {
    path: '/menu/master/inventory/update/:id',
    exact: true,
    component: MasterInventoryUpdate
  },
  {
    path: '/menu/master/inventory/search',
    exact: true,
    component: MasterInventorySearch
  },
  {
    path: '/menu/master/inventory/search/id/:id',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/id/:id/name/:name',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/id/:id/name/:name/quantity/:quantity',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/quantity/:quantity/location/:location',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/quantity/:quantity/type/:type',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/quantity/:quantity/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/quantity/:quantity/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/id/:id/name/:name/location/:location',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/location/:location/type/:type',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/location/:location/type/:type/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/location/:location/type/:type/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/location/:location/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/location/:location/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/location/:location/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/id/:id/name/:name/type/:type',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/type/:type/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/type/:type/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/type/:type/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/id/:id/name/:name/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/name/:name/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/id/:id/quantity/:quantity',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/quantity/:quantity/location/:location',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/quantity/:quantity/location:location/type/:type/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/id/:id/quantity/:quantity/type/:type',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/quantity/:quantity/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/quantity/:quantity/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/id/:id/location/:location',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/id/:id/location/:location/type/:type',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/location/:location/type/:type/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/location/:location/type/:type/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/location/:location/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/location/:location/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/location/:location/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/id/:id/type/:type',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/id/:id/type/:type/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/type/:type/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/type/:type/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/id/:id/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/id/:id/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/id/:id/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/name/:name',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/name/:name/quantity/:quantity',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/quantity/:quantity/location/:location',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/quantity/:quantity/type/:type',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/quantity/:quantity/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/quantity/:quantity/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/name/:name/location/:location',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/location/:location/type/:type',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/location/:location/type/:type/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/location/:location/type/:type/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/location/:location/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/location/:location/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/location/:location/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/name/:name/type/:type',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/name/:name/type/:type/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/type/:type/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/type/:type/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/name/:name/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/name/:name/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/name/:name/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/quantity/:quantity',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/quantity/:quantity/location/:location',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/quantity/:quantity/type/:type',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/quantity/:quantity/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/quantity/:quantity/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/location/:location',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/location/:location/type/:type',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/location/:location/type/:type/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/location/:location/type/:type/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/location/:location/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/location/:location/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/location/:location/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/type/:type',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/type/:type/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path:
      '/menu/master/inventory/search/type/:type/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/type/:type/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/group/:group',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/group/:group/description/:description',
    exact: true,
    component: MasterInventory
  },
  {
    path: '/menu/master/inventory/search/description/:description',
    exact: true,
    component: MasterInventory
  }
];

export default MasterInventoryRoute;
