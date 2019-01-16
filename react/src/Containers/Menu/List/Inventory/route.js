import Result from './Result';
import Search from './Search';

const Route = [
  {
    path: '/menu/list/inventory',
    exact: true,
    component: Search
  },
  {
    path: '/menu/list/inventory/id/:id',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/id/:id/name/:name',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/id/:id/name/:name/quantity/:quantity',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/quantity/:quantity/location/:location',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/quantity/:quantity/type/:type',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/quantity/:quantity/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/quantity/:quantity/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/id/:id/name/:name/location/:location',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/location/:location/type/:type',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/location/:location/type/:type/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/location/:location/type/:type/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/location/:location/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/location/:location/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/location/:location/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/id/:id/name/:name/type/:type',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/id/:id/name/:name/type/:type/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/type/:type/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/type/:type/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/id/:id/name/:name/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/name/:name/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/id/:id/name/:name/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/id/:id/quantity/:quantity',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/id/:id/quantity/:quantity/location/:location',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/quantity/:quantity/location:location/type/:type/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/id/:id/quantity/:quantity/type/:type',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/id/:id/quantity/:quantity/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/quantity/:quantity/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/id/:id/location/:location',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/id/:id/location/:location/type/:type',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/location/:location/type/:type/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/location/:location/type/:type/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/id/:id/location/:location/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/location/:location/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/location/:location/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/id/:id/type/:type',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/id/:id/type/:type/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/id/:id/type/:type/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/id/:id/type/:type/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/id/:id/group/:group',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/id/:id/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/id/:id/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/name/:name',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/name/:name/quantity/:quantity',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/name/:name/quantity/:quantity/location/:location',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/name/:name/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/name/:name/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/name/:name/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/name/:name/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/name/:name/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/name/:name/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/name/:name/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/name/:name/quantity/:quantity/type/:type',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/name/:name/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/name/:name/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/name/:name/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/name/:name/quantity/:quantity/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/name/:name/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/name/:name/quantity/:quantity/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/name/:name/location/:location',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/name/:name/location/:location/type/:type',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/name/:name/location/:location/type/:type/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/name/:name/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/name/:name/location/:location/type/:type/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/name/:name/location/:location/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/name/:name/location/:location/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/name/:name/location/:location/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/name/:name/type/:type',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/name/:name/type/:type/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/name/:name/type/:type/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/name/:name/type/:type/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/name/:name/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/name/:name/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/name/:name/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/quantity/:quantity',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/quantity/:quantity/location/:location',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/quantity/:quantity/location/:location/type/:type',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/quantity/:quantity/location/:location/type/:type/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/quantity/:quantity/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/quantity/:quantity/location/:location/type/:type/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/quantity/:quantity/location/:location/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/quantity/:quantity/location/:location/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/quantity/:quantity/location/:location/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/quantity/:quantity/type/:type',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/quantity/:quantity/type/:type/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/quantity/:quantity/type/:type/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/quantity/:quantity/type/:type/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/quantity/:quantity/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/quantity/:quantity/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/quantity/:quantity/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/location/:location',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/location/:location/type/:type',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/location/:location/type/:type/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/location/:location/type/:type/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/location/:location/type/:type/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/location/:location/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/location/:location/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/location/:location/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/type/:type',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/type/:type/group/:group',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/inventory/type/:type/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/type/:type/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/group/:group',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/group/:group/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/inventory/description/:description',
    exact: true,
    component: Result
  }
];

export default Route;
