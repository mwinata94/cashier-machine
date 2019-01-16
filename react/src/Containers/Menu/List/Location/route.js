import Result from './Result';
import Search from './Search';

const Route = [
  {
    path: '/menu/list/location',
    exact: true,
    component: Search
  },
  {
    path: '/menu/list/location/id/:id',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/location/name/:name',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/location/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/location/id/:id/name/:name',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/location/id/:id/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/location/name/:name/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/location/id/:id/name/:name/description/:description',
    exact: true,
    component: Result
  }
];

export default Route;
