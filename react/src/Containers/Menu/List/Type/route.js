import Result from './Result';
import Search from './Search';

const Route = [
  {
    path: '/menu/list/type',
    exact: true,
    component: Search
  },
  {
    path: '/menu/list/type/id/:id',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/type/name/:name',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/type/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/type/id/:id/name/:name',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/type/id/:id/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/type/name/:name/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/type/id/:id/name/:name/description/:description',
    exact: true,
    component: Result
  }
];

export default Route;
