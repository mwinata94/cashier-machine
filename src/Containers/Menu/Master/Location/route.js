import MasterLocation from './Location';
import MasterLocationCreate from './LocationCreate';
import MasterLocationUpdate from './LocationUpdate';
import MasterLocationSearch from './LocationSearch';

const MasterLocationRoute = [
  {
    path: '/menu/master/location',
    exact: true,
    component: MasterLocation
  },
  {
    path: '/menu/master/location/create',
    exact: true,
    component: MasterLocationCreate
  },
  {
    path: '/menu/master/location/update/:id',
    exact: true,
    component: MasterLocationUpdate
  },
  {
    path: '/menu/master/location/search',
    exact: true,
    component: MasterLocationSearch
  },
  {
    path: '/menu/master/location/search/id/:id',
    exact: true,
    component: MasterLocation
  },
  {
    path: '/menu/master/location/search/name/:name',
    exact: true,
    component: MasterLocation
  },
  {
    path: '/menu/master/location/search/description/:description',
    exact: true,
    component: MasterLocation
  },
  {
    path: '/menu/master/location/search/id/:id/name/:name',
    exact: true,
    component: MasterLocation
  },
  {
    path: '/menu/master/location/search/id/:id/description/:description',
    exact: true,
    component: MasterLocation
  },
  {
    path: '/menu/master/location/search/name/:name/description/:description',
    exact: true,
    component: MasterLocation
  },
  {
    path:
      '/menu/master/location/search/id/:id/name/:name/description/:description',
    exact: true,
    component: MasterLocation
  }
];

export default MasterLocationRoute;
