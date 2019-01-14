import Result from './Result';
import Search from './Search';

const Route = [
  {
    path: '/menu/list/group',
    exact: true,
    component: Search
  },
  {
    path: '/menu/list/group/id/:id',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/group/name/:name',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/group/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/group/id/:id/name/:name',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/group/id/:id/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/group/name/:name/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/group/id/:id/name/:name/description/:description',
    exact: true,
    component: Result
  }
];

export default Route;
