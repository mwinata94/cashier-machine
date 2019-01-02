import MasterLocation from './Location';
import MasterLocationCreate from './LocationCreate';
import MasterLocationEdit from './LocationEdit';
import MasterLocationSearch from './LocationSearch';
import MasterLocationSearchResult from './LocationSearchResult';

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
    path: '/menu/master/location/edit/id/:id/name/:name',
    exact: true,
    component: MasterLocationEdit
  },
  {
    path: '/menu/master/location/search',
    exact: true,
    component: MasterLocationSearch
  },
  {
    path: '/menu/master/location/search/id/:id',
    exact: true,
    component: MasterLocationSearchResult
  },
  {
    path: '/menu/master/location/search/name/:name',
    exact: true,
    component: MasterLocationSearchResult
  },
  {
    path: '/menu/master/location/search/id/:id/name/:name',
    exact: true,
    component: MasterLocationSearchResult
  }
];

export default MasterLocationRoute;
